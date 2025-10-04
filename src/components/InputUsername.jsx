import React, { useState } from "react";

export function InputUsername({ onSubmitAction, label }) {

    const [inputValue, setInputValue] = useState("")

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && inputValue.trim() !== "") {
            onSubmitAction(inputValue)
            setInputValue("")
        }
    }

        const handleButtonClick = () => {
        if (inputValue.trim() !== "") {
            onSubmitAction(inputValue)
            setInputValue("");
        }
    }

    return (
        <>
            <div
                className="d-flex justify-content-start align-items-center gap-3 px-3"
                style={{
                    borderRadius: "50px",
                    background: "white",
                    width: "320px"
                }}
            >
                <i className="fa-regular fa-user text-primary"></i>
                <input
                    type="text"
                    className="border-0 p-2"
                    placeholder="username"
                    style={{ outline: "none" }}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button
                className="btn btn-primary m-3"
                onClick={handleButtonClick}
                style={{
                    borderRadius: "20px",
                    width: "320px"
                }}
            >
                {label}
            </button>
        </>
    )
}