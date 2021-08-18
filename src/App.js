import "./css/App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
    const [user] = useAuthState(auth);

    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(25);

    const sendMessage = (msg, sender) => {
        console.log(auth.currentUser);
        const NewMessage = {
            text: msg,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth.currentUser.uid,
            userName: auth.currentUser.displayName,
            photoUrl: auth.currentUser.photoURL
        };

        messagesRef.add(NewMessage);
    };

    const [chatMessages] = useCollectionData(query, { idField: "id" });

    return (
        <>
            <div className="Chat-App">
                <section>
                    {user ? (
                        <>
                            <ChatRoom
                                chatMessages={chatMessages}
                                sendMessage={sendMessage}
                                auth={auth}
                            />
                            <SignOut auth={auth} />
                        </>
                    ) : (
                        <SignIn firebase={firebase} auth={auth} />
                    )}
                </section>
            </div>
        </>
    );
}

export default App;
