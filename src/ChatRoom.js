import React from "react";
import ChatWindow from "./ChatWindow";
import TextWindow from "./TextWindow";

export default function ChatRoom({ chatMessages, sendMessage, auth }) {
    return (
        <div className="section">
            <ChatWindow chatMessages={chatMessages} auth={auth} />
            <TextWindow sendMessage={sendMessage} />
            <div className="section"></div>
        </div>
    );
}
