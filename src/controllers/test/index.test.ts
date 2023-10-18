import request from 'supertest';
import app from '../../app.js';
import { expect, test, it } from 'vitest';


test('should create a order successfully', async () => {
    const order = {
        farmerName: "kevin",
        landSize: 0.3,
        fertilizer: "lime",
        fertilizerQuantity: 1,
        seeds: "maize",
        seedsQuantity: 1
    };
    const response = await request(app).post('/api/v1/orders').send(order);
    expect(response.status).toEqual(201);
}, 25000);

test('should get all order successfully', async () => {
    const response = await request(app).get('/api/v1/orders');
    expect(response.status).toEqual(200);
}, 25000);

test('should create a User successfully', async () => {
    const user = {
        firstName: "gabby",
        lastName: "axel",
        email: "gabby@gmail.com",
        password: "12345",
        role: "user"
    };
    const response = await request(app).post('/api/v1/signup').send(user);
    expect(response.status).toEqual(201);
}, 25000);

test('should create a User successfully', async () => {
    const user = {
        firstName: "rubona",
        lastName: "axel",
        email: "rubona@gmail.com",
        password: "12345",
        role: "user"
    };
    const userLog = {
        email: "rubona@gmail.com",
        password: "12345",
    };
    const response = await request(app).post('/api/v1/signup').send(user);
    const response2 = await request(app).post('/api/v1/login').send(userLog);
    expect(response.status).toEqual(201);
    expect(response2.status).toEqual(200);
}, 25000);
