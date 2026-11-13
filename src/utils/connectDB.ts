import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connectDB = async() => {
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName: "inventory-management",
        });

        return "Database connected successfully";
    } catch (error) {
        throw error;
    }
}

export default connectDB;
