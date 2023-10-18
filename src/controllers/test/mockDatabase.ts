import { IOrder } from "../../models/farmersOrder.js";
import { IUser } from "../../models/user.js";

export const mockData: {
    orders: IOrder[];
    users: IUser[];
} = {
    orders: [],
    users: [],
};

// Define default values for missing properties
const defaultOrder: IOrder = {
    farmerName: '',
    landSize: 0,
    fertilizer: '',
    fertilizerQuantity: 0,
    seeds: '',
    seedsQuantity: 0,
    isPaid: false,    
    status: 'pending',
    amountToBePaid: 0,
};

const defaultUser: IUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user"
};

export const addOrder = (order: IOrder) => mockData.orders.push({ ...defaultOrder, ...order });
export const getUsers = () => mockData.users;
export const addUser = (user: IUser) => mockData.users.push({...defaultUser, ...user});
