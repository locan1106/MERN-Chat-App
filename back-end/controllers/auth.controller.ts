import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/user.model.ts";
import generateTokenAndSetCookie from "../utils/generateToken.ts";

export const signup = async (req: Request, res: Response) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;

		if (password != confirmPassword) {
			return res.status(400).json({ error: "Password don't watch" });
		}

		const user = await User.findOne({ username });
		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// api avatar
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});
		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error: any) {
		console.log("Error in signup controller! ", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });

		if (user) {
			const isPasswordCorrect = await bcrypt.compare(
				password,
				user?.password || ""
			);

			if (!isPasswordCorrect) {
				return res
					.status(400)
					.json({ error: "Password does not match username" });
			}

			generateTokenAndSetCookie(user._id, res);

			res.status(200).json({
				_id: user._id,
				fullName: user.fullName,
				username: user.username,
				profilePic: user.profilePic,
			});
		} else {
			return res.status(400).json({ error: "username doest not exist" });
		}
	} catch (error: any) {
		console.log("Error in login controller! ", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req: Request, res: Response) => {
	try {
		// Delete jwt in cookie
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully!" });
	} catch (error: any) {
		console.log("Error in logout controller! ", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
