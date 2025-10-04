import React, { useEffect, useState } from "react"
import { Input } from "../components/Input"
import { HeaderNewContact } from "../components/HeaderNewContact"
import { Form } from "../components/Form"
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export function NewContact() {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    const username = store.user
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        if (!username) {
            console.error("No hay usuario logeado para agregar contacto.")
            return
        }

        await addContactAgenda(
            username,
            contactData.name,
            contactData.phone,
            contactData.email,
            contactData.address
        )

        setContactData({ name: "", email: "", phone: "", address: "" })
        navigate("/1")
    }

    async function addContactAgenda(username, name, phone, email, address) {

        const url = "https://playground.4geeks.com/contact/agendas/" + username + "/contacts"

        const data = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        try {
            if (response.status != 201) {
                console.log(`Error, no se pudo agregar el contacto`)
                return
            }
            // const body = await response.json()
            // console.log(body.id)
            // dispatch({
            //     type: "SET_CONTACT_ID",
            //     payload: body.id
            // })
        } catch (error) {
            console.log("Error ", error)
        }
    }

    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                width: "100vh",
                height: "auto",
                background: "rgba(192, 192, 192, 0.3)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                borderRadius: "30px"
            }}
        >
            <HeaderNewContact />
            <hr className="w-100 border-3 my-3 border-light opacity-75" />
            <div className="d-flex justify-content-start align-items-center w-100 px-5">
                <p className="fs-6 fw-light m-0">Contact information</p>
            </div>
            <hr className="w-100 border-3 my-3 border-light opacity-75" />

            {/* Aqui empieza el form con los inputs */}

            <Form
                data={contactData}
                onChange={handleChange}
            />

            {/* Aqui estan los botones */}

            <div className="d-flex gap-3 py-3">
                <button
                    className="btn btn-outline-dark m-3"
                    onClick={() => { navigate("/1") }}
                    style={{
                        borderRadius: "20px",
                        width: "320px"
                    }}
                >
                    Cancel
                </button>
                <button
                    className="btn btn-primary m-3"
                    style={{
                        borderRadius: "20px",
                        width: "320px"
                    }}
                    onClick={handleSubmit}
                >
                    Add contact
                </button>
            </div>

        </div>
    )
}