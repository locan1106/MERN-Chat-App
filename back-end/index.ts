import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// Routes
import authRoutes from "./routes/auth.routes.ts";
import messageRoutes from "./routes/message.routes.ts";
import userRoutes from "./routes/user.routes.ts";
// Mongodb
import connectMongoDB from "./database/connect.ts";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(PORT, () => {
	connectMongoDB();
	console.log(`Server is running on port ${PORT}`);
});
