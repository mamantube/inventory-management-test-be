import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connectDB = async() => {
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName: "inventory-management"
        });

        return Promise.resolve("Database connected successfully")
    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectDB;