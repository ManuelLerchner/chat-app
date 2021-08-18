import React from "react";

export default function SignIn({ firebase, auth }) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <button
            className="btn waves-effect waves-light red"
            onClick={signInWithGoogle}
        >
            Sign in With Google
            <i className="material-icons right">send</i>
        </button>
    );
}
