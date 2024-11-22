import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import morgan from "morgan";
import authRouter from "./routes/authRoute.js";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth', authRouter);


app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
