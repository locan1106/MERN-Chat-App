import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
const protectRoute = async (req: any, res: Response, next: NextFunction) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res
				.status(401)
				.json({ error: "Unauthorized - No token provided" });
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
			userId: string;
		};

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error: any) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;
