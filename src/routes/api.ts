import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.status(200).json({
            message: "Server is running"
        })
    } catch (error) {
        console.error("Failed running server", error)
    }
})


export default router;