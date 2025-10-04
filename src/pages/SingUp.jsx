import React from "react";
import { InputUsername } from "../components/InputUsername";
import { Link, useNavigate } from "react-router-dom";
import { SingUpHeader } from "../components/SingUpHeader";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function SingUp() {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()


    async function getUserAgenda(username) {
        const url = "https://playground.4geeks.com/contact/agendas/" + username
        const response = await fetch(url)
        try {
            if (response.status != 200) {
                alert("Error, no se encontro ninguna  o el usuario no existe")
                return
            }
            dispatch({
                type: "SET_CURRENT_USER",
                payload: username
            })
            navigate("/1")
        } catch (error) {
            console.log("Error ", error)
        }
    }


    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                width: "400px",
                height: "auto",
                background: "rgba(192, 192, 192, 0.3)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                borderRadius: "30px"
            }}
        >
            <SingUpHeader label="Login" />
            <InputUsername onSubmitAction={getUserAgenda} label="Login" />
            <p className="py-3">¿Don't have a account? <Link to={"/2"}>Register</Link></p>
        </div>
    )
}