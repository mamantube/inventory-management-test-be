import express from "express";
import router from "./routes/api";
import connectDB from "./utils/connectDB";


async function init() {
    try {
        const result = await connectDB();
        console.log(result);
        
        const app = express();

        const PORT = 8001;

        app.use("/", router);

        app.listen(PORT, () => {
            console.log(`Server is running on: http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.error(error);
    }
}

init()