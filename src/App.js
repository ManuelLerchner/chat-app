import ChatWindow from "./ChatWindow";
import TextWindow from "./TextWindow";

import "./css/App.css";
import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

function App() {
    const [chatMessages, setchatMessages] = useState([]);

    useEffect(() => {
        const testMessage1 = {
            text: "Test122222222222222222222222222222dfffffdfffffffffffffffffff",
            time: new Date().toLocaleString(),
            id: 1,
            sender: "Manuel"
        };
        const testMessage2 = {
            text: "Testddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2",
            time: new Date().toLocaleString(),
            id: 2,
            sender: "User"
        };

        const testMessage3 = {
            text: "gh",
            time: new Date().toLocaleString(),
            id: 3,
            sender: "ACD"
        };

        const testMessage4 = {
            text: "ffg",
            time: new Date().toLocaleString(),
            id: 4,
            sender: "Manuel"
        };

        setchatMessages([
            testMessage1,
            testMessage2,
            testMessage3,
            testMessage4
        ]);
    }, []);

    const sendMessage = (msg, sender) => {
        const NewMessage = {
            text: msg,
            time: new Date().toLocaleString(),
            id: uuidv4(),
            sender: sender
        };

        setchatMessages([...chatMessages, NewMessage]);
    };

    return (
        <>
            <div className="Chat-App">
                <div className="section"></div>
                <ChatWindow chatMessages={chatMessages} />
                <TextWindow sendMessage={sendMessage} />
                <div className="section"></div>
            </div>
        </>
    );
}

export default App;
