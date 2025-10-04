import React from "react";

export function HeaderNewContact() {
    return (
        <div className="d-flex justify-content-between align-items-center w-100 px-5 pt-3">
            <div className="d-flex justify-content-center align-items-center">
                <i className="fs-4 fa-solid fa-user-plus border border-5 border-light rounded-circle p-3"></i>
                <div className="px-4 m-0">
                    <p className="m-0 mt-2 fs-4 fw-bold">Add new contact</p>
                    <p className="fw-lighter">Add new contact in your list</p>
                </div>
            </div>
            <button className="border-0" style={{background: "none"}}>
                <i className="text-muted fa-solid fa-xmark"></i>
            </button>
        </div>
    )
}