import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB: ${error}`.bgRed.white);
    }
}

export default connectDB;