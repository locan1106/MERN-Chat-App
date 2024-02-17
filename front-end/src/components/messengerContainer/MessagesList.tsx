import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { IMessage } from "../../interfaces/message";

const MessagesList = () => {
	const { loading, messages } = useGetMessages();
	const lastMessageRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className="px-4 flex-1 overflow-auto">
			{loading &&
				[...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

			{!loading && messages.length === 0 && (
				<p className="flex items-center justify-center h-full text-white">
					Send a message to start your conversation
				</p>
			)}

			{!loading &&
				messages.length > 0 &&
				messages.map((message: IMessage) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
		</div>
	);
};

export default MessagesList;
