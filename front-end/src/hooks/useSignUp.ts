import { useState } from "react";
import { User } from "../interfaces/user";
import toast from "react-hot-toast";

const useSignUp = () => {
	const [loading, setLoading] = useState(false);

	const signup = async ({
		fullName,
		username,
		password,
		confirmPassword,
		gender,
	}: User) => {
		const success = handleInputErrors({
			fullName,
			username,
			password,
			confirmPassword,
			gender,
		});

		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName,
					username,
					password,
					confirmPassword,
					gender,
				}),
			});

			const data = await res.json();

			console.log(data);
			if (data.error) {
				console.log("vào đây");
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
		} catch (error) {
			if (error instanceof Error) {
				console.log("xuống catch");
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
	fullName,
	username,
	password,
	confirmPassword,
	gender,
}: User) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
