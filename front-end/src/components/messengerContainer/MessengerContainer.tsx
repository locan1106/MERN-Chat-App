import React, { useState } from "react";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessengerContainer = () => {
	const [noChatSelected, useNoChatSelected] = useState(true);
	return (
		<div className="md:min-w-[450px] flex flex-col">
			{noChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					{/* header */}
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">To: </span>
						<span className="text-gray-900 font-bold">John Doe</span>
					</div>
					<MessagesList />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessengerContainer;
