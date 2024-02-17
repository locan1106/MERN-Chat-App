import { useEffect } from "react";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";

const MessengerContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// clean function
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
	return (
		<div className="md:min-w-[450px] flex flex-col">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* header */}
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">To: </span>
						<span className="text-gray-900 font-bold">
							{selectedConversation.fullName}
						</span>
					</div>
					<MessagesList />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessengerContainer;
