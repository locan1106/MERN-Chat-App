import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username: string, password: string) => {
		const success = handleInputErrors(username, password);
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username,
					password,
				}),
			});

			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}
			console.log("qua dòng này");
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

function handleInputErrors(username: string, password: string) {
	if (!username && !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (!username) {
		toast.error("Please fill in username field");
		return false;
	}

	if (!password) {
		toast.error("Please fill in password field");
		return false;
	}

	return true;
}
