import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

const logger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
};

app.use(logger);

app.get("/", (req, res) => {
    res.send("LearnBridge backend is running");
});

app.get("/about", (req, res) => {
    res.send("Welcome to LearnBridge");
});

app.get("/courses", (req, res) => {
    res.send("These are the LearnBridge courses");
});

app.use(userRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});