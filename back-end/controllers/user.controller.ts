import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsersForSidebar = async (req: any, res: Response) => {
	try {
		const loggedInUserId = req.user._id;
		const filteredUsers = await User.find({
			_id: { $ne: loggedInUserId },
		}).select("-password"); // select: - (password) meaning not get password attribute
		res.status(200).json(filteredUsers);
	} catch (error: any) {
		console.log("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Interal server error" });
	}
};
