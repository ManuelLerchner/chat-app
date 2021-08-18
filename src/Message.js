import React from "react";
import "./css/Message.css";

export default function Message({ message }) {
    const align = message.sender === "Manuel" ? "Sender offset-l8" : "Receiver";

    return (
        <div className="row">
            <div className={`col l4 MessageBox ${align}`}>
                <p>{message.sender + ", " + message.time}</p>

                <p className="Message">{message.text}</p>
            </div>
        </div>
    );
}
