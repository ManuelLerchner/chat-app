import React from "react";
import Message from "./Message";

import "./css/ChatWindow.css";

export default function ChatWindow({ chatMessages }) {
    return (
        <div className="row">
            <div className="col l8 offset-l2 ChatWindow">
                {chatMessages.map((message) => {
                    return (
                        <div className="section" key={message.id}>
                            <Message message={message} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
