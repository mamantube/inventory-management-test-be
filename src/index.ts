import express from "express";
import router from "./routes/api";
import connectDB from "./utils/connectDB";
import cors from "cors";



const app = express();
const PORT = Number(process.env.PORT) || 8001;

app.use(cors());
app.use(express.json());
app.use("/", router);

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on: http://127.0.0.1:${PORT}`);
    void connectDB()
        .then((message) => console.log(message))
        .catch((error: unknown) => console.error("Database connection failed:", error));
});

server.on("error", (error: NodeJS.ErrnoException) => {
    console.error(`HTTP server failed to listen on port ${PORT}:`, error.message);
    process.exitCode = 1;
});
