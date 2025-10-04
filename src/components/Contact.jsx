import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Contact({ contacts, deleteContactUser }) {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="">
            <ul className="list-group">

                {/* Informacion del contacto desde la API */}

                {contacts.map((contact) => {
                    return (
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center my-2"
                            style={{
                                width: "auto",
                                height: "auto",
                                background: "rgba(255, 255, 255, 0.45)",
                                backdropFilter: "blur(5px)",
                                borderRadius: "30px"
                            }}
                        >
                            <div className="d-flex align-items-center">
                                <div>
                                    <img className="rounded-circle" src={`https://avatar.iran.liara.run/username?username=${contact.name}`} style={{ width: "70px", height: "70px" }} />
                                </div>
                                <div className="ms-3 py-2">
                                    <p className="fs-4 fw-bold m-0">{contact.name}</p>
                                    <p className="m-1"><i className="fa-solid fa-location-dot pe-3"></i>{contact.address}</p>
                                    <p className="m-1"><i className="fa-solid fa-phone pe-3"></i>{contact.phone}</p>
                                    <p className="m-1"><i className="fa-solid fa-envelope pe-3"></i>{contact.email}</p>
                                </div>

                            </div>

                            {/* botones */}

                            <div className="d-flex gap-3">
                                <i
                                    className="fa-solid fa-pencil"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        dispatch({
                                            type: "SET_CONTACT_ID",
                                            payload: contact.id
                                        }),
                                        navigate(`/edit-contact/${contact.id}`)
                                    }}
                                >
                                </i>
                                <i
                                    className="fa-solid fa-trash"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => deleteContactUser(contact.id)}
                                >
                                </i>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

