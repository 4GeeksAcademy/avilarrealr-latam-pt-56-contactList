import React, { useEffect, useState } from "react";
import { Contact } from "../components/Contact";
import { HeaderContacts } from "../components/HeaderContacts";
import { User } from "../components/User";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Navigate, useNavigate } from "react-router-dom";

export function ContactsList() {

    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()
    const { store } = useGlobalReducer()
    const username = store.user


    async function getUserContacts(username) {
        const url = "https://playground.4geeks.com/contact/agendas/" + username + "/contacts"
        const response = await fetch(url)
        try {
            if (!response.ok) {
                console.log("Error, algo salio mal")
                return
            }
            const body = await response.json()
            setContacts(body.contacts)
        } catch (error) {
            console.log("Error ", error)
        }
    }

    async function deleteContactUser(contactId) {

        const url = "https://playground.4geeks.com/contact/agendas/" + username + "/contacts/" + contactId

        const response = await fetch(url, {
            method: "DELETE"
        })
        try {
            if (response.status != 204) {
                console.log(`Error, el contacto del usuario: ${username}, no existe en la agenda`)
                return false
            }
            await getUserContacts(username)
            return true
        } catch (error) {
            console.log("Error ", error)
            return false
        }
    }

    useEffect(() => {
        if (username) {
            getUserContacts(username);
        }
    }, [username])


    return (
        <div
            className="d-flex flex-column"
            style={{
                width: "100vh",
                height: "auto",
                minHeight: "30vh",
                background: "rgba(192, 192, 192, 0.3)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                borderRadius: "30px"
            }}
        >

            {/* Esto es el contenido del lado izquierdo */}

            <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{
                    position: "absolute",
                    width: "25%",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    borderRadius: "30px"
                }}
            >
                <User extra="Hi, " username={username} info="This is your contact list"/>
                <i
                    className="fa-solid fa-right-from-bracket text-danger pt-5 fs-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {navigate("/")}}
                >
                </i>
            </div>

            {/* Esto es el contenido del lado derecho */}

            <div className="w-100 d-flex flex-column align-items-end px-5">
                <div className="d-flex flex-column justify-content-center align-items-between p-3 w-75">
                    <HeaderContacts />
                    <Contact contacts={contacts} deleteContactUser={deleteContactUser} />
                </div>
            </div>
        </div>
    )
}




