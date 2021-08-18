import React from "react";

export default function SignOut({ auth }) {
    return (
        auth.currentUser && (
            <>
                <button
                    className="btn waves-effect waves-light red"
                    onClick={() => {
                        auth.signOut();
                    }}
                >
                    Sign Out
                    <i className="material-icons right">send</i>
                </button>
            </>
        )
    );
}
