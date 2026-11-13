import { Request, Response } from "express";
import * as Yup from "yup";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const validationSchema = Yup.object({
    user_name: Yup.string().required("Usernama harus diisi"),
    email: Yup.string().email("Format email tidak valid").required("Email harus diisi"),
    password: Yup.string().required("Password harus diisi")
});

type TRegister = {
    user_name: string;
    email: string;
    password: string;
};

export default {
    async register(req: Request, res: Response) {
        const { user_name, email, password } = req.body as unknown as TRegister;

        try {
            if (mongoose.connection.readyState !== 1) {
                return res.status(503).json({
                    message: "Database belum terhubung. Periksa DATABASE_URL dan akses MongoDB Atlas.",
                    data: null,
                });
            }

            await validationSchema.validate({
                user_name,
                email,
                password
            });

            const saltRounds = 10;
            const passwordHashing = await bcrypt.hash(
                password,
                saltRounds
            );

            const result = await UserModel.create({
                user_name,
                email,
                password: passwordHashing,
            })

            res.status(201).json({
                message: "Registrasi sukses",
                data: result
            })

        } catch (error) {
            res.status(400).json({
                message: "Registration Failed",
                error: error instanceof Error ? error.message : "Terjadi kesalahan saat registrasi",
                data: null,
            })
            
        }
    }
}



