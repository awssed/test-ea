import React, { useState } from "react";
import Popup from "reactjs-popup";
import closeIcon from "./close.svg";
import arrowIcon from "./arrow-right.svg";

function Pop(props) {
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateForm();
    };

    const validateForm = () => {
        setIsFormValid(isValidEmail(email));
    };

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            try {
                // This is Ajax request to server
                const response = await fetch("mail.php", {
                    method: "POST",
                    body: JSON.stringify({ email }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok | true) {
                    setIsSubmitted(true);
                    setIsError(false);
                } else {
                    setIsSubmitted(true);
                    setIsError(true);
                }
            } catch (error) {
                setIsSubmitted(true);
                setIsError(true);
            }
        }
    };

    const inputClassName = isFormValid ? "input-mail" : "input-mail-invalid";
    const submitButtonClassName = isFormValid ? "submit-mail" : "submit-mail-light";

    const closeModal = () => {
        setIsSubmitted(false);
        setIsError(false);
        setEmail("");
    };

    return (
        <>
            <div className="form-mail">
                <form onSubmit={handleSubmit}>
                    <input
                        className={inputClassName}
                        type="text"
                        required
                        placeholder="Enter your Email and get notified"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        type="submit"
                        className={submitButtonClassName}
                        disabled={!isFormValid}
                    >
                        <img src={arrowIcon} alt="Submit" />
                    </button>
                </form>
            </div>
            <Popup
                open={isSubmitted}
                closeOnDocumentClick
                onClose={closeModal}
                overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
                <div className="modal">
                    <button className="close-first" onClick={closeModal}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                    {isError ? (
                        <>
                            <p className="modal-name">Error!</p>
                            <p className="modal-text">Failed to submit the form.</p>
                        </>
                    ) : (
                        <>
                            <p className="modal-name">Success!</p>
                            <p className="modal-text">
                                You have successfully subscribed to the email newsletter.
                            </p>
                        </>
                    )}
                    <button className="close-second" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </Popup>
        </>
    );
}

export default Pop;