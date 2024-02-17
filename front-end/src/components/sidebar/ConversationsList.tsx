import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import { IConversation } from "../../interfaces/conversation";

const ConversationsList = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className="py-2 flex flex-col overflow-auto">
			{conversations.map((conversation: IConversation, idx: number) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? (
				<span className="loading loading-spinner mx-auto"></span>
			) : null}
		</div>
	);
};

export default ConversationsList;
