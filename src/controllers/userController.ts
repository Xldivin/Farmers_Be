import { Request, Response } from "express";
import { dbConnect } from "../db/index.js";
import { IUser } from "../models/user.js";
import { sendEmail } from "../utils/sendEmail.js";


export const createUser = () => {
  return async (req: Request, res: Response) => {
    const db = await dbConnect();
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await db?.users.findOne({ email: email });
    if (existingUser) {
        const errorResponse = { error: 'The user already exists' };
        res.status(409).json(errorResponse); // 409 Conflict status code
        return;
    }

    const newUser: IUser = {
      firstName,
      lastName,
      email,
      password,
      role,
    };

    const result = await db?.users.insertOne(newUser);
    if (!result) {
      console.log("Request failed");
      const errorResponse = { error: "Request failed" };
      res.status(400).json(errorResponse);
      return;
    }

    const response = { data: newUser, status: 201 };
    sendEmail(newUser);
    res.status(response.status).json(response);
  };
};

export const login = () => {
  return async (req: Request, res: Response) => {
    const db = await dbConnect();
    const { email, password } = req.body;

    const user = await db?.users.findOne({ email: email });

    console.log("Existing User:", user);

    if (!user) {
      const errorResponse = { error: "Invalid email or password" };
      res.status(401).json(errorResponse);
      return;
    }

    if(user?.password !== password){
      const errorResponse = {error: "The password is not correct"}
      res.status(400).json(errorResponse);
      return;
    }

    const response = { user, status: 200 };
    res.status(response.status).json(response);
  };
};
