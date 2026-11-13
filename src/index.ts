import express from "express";
import router from "./routes/api";


async function init() {
    try {
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