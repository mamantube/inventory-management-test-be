import mongoose from "mongoose";
import { ROLES } from "../utils/constant";

export interface User {
    user_name: string;
    email: string;
    password: string;
    role: string;
}

const Schema = mongoose.Schema

const UserSchema = new Schema<User>(
    {
        user_name: {
            type: Schema.Types.String,
            required: true,
        },
        email: {
            type: Schema.Types.String,
            required: true
        },
        password: {
            type: Schema.Types.String,
            required: true,
        },
        role: {
            type: Schema.Types.String,
            enum: [ROLES.ADMIN, ROLES.USER],
            default: ROLES.USER
        }
    }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;