import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);

	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users");
				const data = await res.json();

				if (data.error) {
					throw new Error(data.error);
				}

				setConversations(data);
				setLoading(false);
			} catch (error) {
				if (error instanceof Error) {
					toast.error(error.message);
				}
			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, []);
	return { loading, conversations };
};

export default useGetConversations;
