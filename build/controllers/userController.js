var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dbConnect } from "../db/index.js";
import { sendEmail } from "../utils/sendEmail.js";
export const createUser = () => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield dbConnect();
        const { firstName, lastName, email, password, role } = req.body;
        const existingUser = yield (db === null || db === void 0 ? void 0 : db.users.findOne({ email: email }));
        if (existingUser) {
            const errorResponse = { error: 'The user already exists' };
            res.status(409).json(errorResponse); // 409 Conflict status code
            return;
        }
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            role,
        };
        const result = yield (db === null || db === void 0 ? void 0 : db.users.insertOne(newUser));
        if (!result) {
            console.log("Request failed");
            const errorResponse = { error: "Request failed" };
            res.status(400).json(errorResponse);
            return;
        }
        const response = { data: newUser, status: 201 };
        sendEmail(newUser);
        res.status(response.status).json(response);
    });
};
export const login = () => {
    return (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield dbConnect();
        const { email, password } = req.body;
        const user = yield (db === null || db === void 0 ? void 0 : db.users.findOne({ email: email }));
        console.log("Existing User:", user);
        if (!user) {
            const errorResponse = { error: "Invalid email or password" };
            res.status(401).json(errorResponse);
            return;
        }
        if ((user === null || user === void 0 ? void 0 : user.password) !== password) {
            const errorResponse = { error: "The password is not correct" };
            res.status(400).json(errorResponse);
            return;
        }
        const response = { user, status: 200 };
        res.status(response.status).json(response);
    });
};
//# sourceMappingURL=userController.js.map