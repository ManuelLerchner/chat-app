import React from "react";
import "./css/Message.css";

function timeConverter(UNIX_timestamp) {
    if (UNIX_timestamp) {
        return UNIX_timestamp.toDate()
            .toString()
            .split(" ")
            .slice(0, 5)
            .join(" ");
    } else {
        return "";
    }
}

export default function Message({ message, auth }) {
    const align =
        message.uid === auth.currentUser.uid ? "Sender offset-l8" : "Receiver";

    return (
        <div className="row">
            <div className={`col l4 MessageBox ${align}`}>
                <p>{timeConverter(message.createdAt)}</p>

                <div className="row">
                    <div className="col l3 ">
                        <img
                            src={message.photoUrl}
                            alt="icon"
                            width="40"
                            height="40"
                        />
                    </div>

                    <p className="left">{message.userName}</p>
                </div>

                <p className="Message">{message.text}</p>
            </div>
        </div>
    );
}
