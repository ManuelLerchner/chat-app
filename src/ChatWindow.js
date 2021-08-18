import React from "react";
import Message from "./Message";

import "./css/ChatWindow.css";

export default function ChatWindow({ chatMessages, auth }) {
    return (
        <div className="row">
            <div className="col l8 offset-l2 ChatWindow">
                {chatMessages &&
                    chatMessages.map((msg) => {
                        return (
                            <div className="section" key={msg.id}>
                                <Message message={msg} auth={auth} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
