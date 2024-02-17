import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { IMessage } from "../../interfaces/message";
import { extractTime } from "../../utils/extractTime";

type MessageProps = {
	message: IMessage;
};

const Message = ({ message }: MessageProps) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe
		? authUser.profilePic
		: selectedConversation.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={profilePic} alt="" />
				</div>
			</div>

			<div className={`chat-bubble text-white ${bubbleBgColor}`}>
				{message.message}
			</div>
			<div className="chat-footer opacity-50 text-sx flex gap-1 items-center text-white">
				{extractTime(message.createdAt)}
			</div>
		</div>
	);
};

export default Message;
