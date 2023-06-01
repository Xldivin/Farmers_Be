import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

const client = new MongoClient(dbUri);

export async function dbConnect() {
  try {
    console.log('Connecting to database...');

    await client.connect();

    console.log('Connected to database');

    const db = client.db('farmers');

    const orders = db.collection('farmers-orders');
    const users = db.collection('users');

    return { orders, users };
  } catch (error) {
    console.error(error);
    await client.close();
  }
}