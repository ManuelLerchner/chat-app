import React, { useRef } from "react";
import "./css/TextWindow.css";

export default function TextWindow({ sendMessage }) {
    const TextArea = useRef();
    const submit = (e) => {
        e.preventDefault();

        const Sender = "Manuel";
        sendMessage(TextArea.current.value, Sender);

        TextArea.current.value = "";
    };
    return (
        <div className="row">
            <form className="col l8 offset-l2 TextWindow" onSubmit={submit}>
                <div className="row">
                    <div className="input-field inline col l10">
                        <textarea
                            ref={TextArea}
                            id="textarea1"
                            className="materialize-textarea"
                        ></textarea>
                        <label htmlFor="textarea1">Textarea</label>
                    </div>

                    <div className="input-field inline col l2">
                        <button
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                        >
                            Send
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
