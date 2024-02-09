import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Types.ObjectId,
				ref: "User",
			},
		],
		messages: [
			{
				type: mongoose.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
	},
	{ timestamps: true }
);

const Conversation = mongoose.model("conversation", conversationSchema);

export default Conversation;
