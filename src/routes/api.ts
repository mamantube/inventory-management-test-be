import express from "express";
import authController from "../controllers/auth.controller";

const router = express.Router();


router.post("/auth/register", authController.register);
// router.get("/", async (req, res) => {
//     try {
//         res.status(200).json({
//             message: "Server is running"
//         })
//     } catch (error) {
//         console.error("Failed running server", error)
//     }
// })


export default router;