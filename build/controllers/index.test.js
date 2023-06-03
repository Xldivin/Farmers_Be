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
import app from '../app.js';
import { expect, test } from 'vitest';
test('should create a order successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const order = {
        farmerName: "kevin",
        landSize: 0.3,
        fertilizer: "lime",
        fertilizerQuantity: 1,
        seeds: "maize",
        seedsQuantity: 1
    };
    const response = yield request(app).post('/api/v1/orders').send(order);
    expect(response.status).toEqual(201);
}), 25000);
test('should get all order successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request(app).get('/api/v1/orders');
    expect(response.status).toEqual(200);
}), 25000);
test('should create a User successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        firstName: "agro",
        lastName: "input",
        email: "agro@gmail.com",
        password: "12345",
        role: "admin"
    };
    const response = yield request(app).post('/api/v1/signup').send(user);
    expect(response.status).toEqual(201);
}), 25000);
test('should create a User successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        firstName: "agro",
        lastName: "input",
        email: "hirwa@gmail.com",
        password: "12345",
        role: "admin"
    };
    const userLog = {
        email: "hirwa@gmail.com",
        password: "12345",
    };
    const response = yield request(app).post('/api/v1/signup').send(user);
    const response2 = yield request(app).post('/api/v1/login').send(userLog);
    expect(response.status).toEqual(201);
    expect(response2.status).toEqual(200);
}), 25000);
//# sourceMappingURL=index.test.js.map