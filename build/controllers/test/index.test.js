var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'supertest';
import app from '../../app.js';
import { expect, test } from 'vitest';
import * as mockDatabase from "./mockDatabase.js";
import { mockData } from './mockDatabase.js';
test('should create an order successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const order = {
        farmerName: 'kevin',
        landSize: 0.3,
        fertilizer: 'lime',
        fertilizerQuantity: 1,
        seeds: 'maize',
        seedsQuantity: 1,
        isPaid: false,
        status: "pending",
        amountToBePaid: 2000,
    };
    // Mock the database function
    mockDatabase.addOrder(order);
    const response = yield request(app).post('/api/v1/orders').send(order);
    expect(response.status).toEqual(201);
    // You can check if the mockDatabase was updated as expected
    expect(mockData.orders).toHaveLength(1);
    expect(mockData.orders[0]).toEqual(order);
}), 25000);
// test('should get all order successfully', async () => {
//     const response = await request(app).get('/api/v1/orders');
//     expect(response.status).toEqual(200);
// }, 25000);
// test('should create a User successfully', async () => {
//     const user = {
//         firstName: "rubona",
//         lastName: "axel",
//         email: "rubona@gmail.com",
//         password: "12345",
//         role: "user"
//     };
//     const userLog = {
//         email: "rubona@gmail.com",
//         password: "12345",
//     };
//     const response = await request(app).post('/api/v1/signup').send(user);
//     const response2 = await request(app).post('/api/v1/login').send(userLog);
//     expect(response.status).toEqual(201);
//     expect(response2.status).toEqual(200);
// }, 25000);
//# sourceMappingURL=index.test.js.map