import React from "react";
import { useNavigate } from "react-router-dom";

export function HeaderContacts() {

    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-between align-items-center pb-5 pt-2">
            <p className="fw-bold fs-2 m-0">My contacts</p>
            <button
                className="btn btn-outline-dark rounded-pill"
                onClick={() => {navigate("/new-contact")}}
            >
                Add new contact
            </button>

        </div>
    )
}