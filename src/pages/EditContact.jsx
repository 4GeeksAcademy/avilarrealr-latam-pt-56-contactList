import React, { useEffect, useState } from "react";
import { Form } from "../components/Form";
import { User } from "../components/User";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";

export function EditContact() {

    const navigate = useNavigate()

    const { store } = useGlobalReducer()
    const username = store.user
    const params = useParams()
    const contactId = store.id ? store.id : params.id

    const [contactData, setContactData] = useState({
        id: null, name: "", email: "", phone: "", address: ""
    });

    useEffect(() => {
        if (username == "") {
            navigate("/")
            return
        }
        fetchContactToEdit(username, contactId)
    }, [username, contactId]);

    const fetchContactToEdit = async (user, id) => {
        const url = `https://playground.4geeks.com/contact/agendas/${user}/contacts`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json()
                const contact = data.contacts.find((contact) => contact.id == contactId)
                contact ? setContactData(contact) : navigate("/1")

            }
        } catch (error) {
            console.error("Error al cargar contacto para edición:", error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setContactData(prevData => ({ ...prevData, [name]: value }))
    }

    async function handleUpdate() {
        const url = `https://playground.4geeks.com/contact/agendas/${username}/contacts/${contactId}`

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData)
            });

            if (response.ok) {
                console.log("Contacto actualizado exitosamente.")

                navigate("/1")
            } else {
                console.error("Error al actualizar contacto. Status:", response.status)
                const errorBody = await response.json();
                console.error("Detalles del error:", errorBody)
            }
        } catch (error) {
            console.error("Error de conexión:", error)
        }
    }

    return (
        <div
            className="d-flex flex-column align-items-center p-5"
            style={{
                width: "100vh",
                height: "auto",
                background: "rgba(192, 192, 192, 0.3)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                borderRadius: "30px"
            }}
        >
            <User username={username} extra="Hi, " info="Updating your contact, you must fill in all fields" />
            <Form data={contactData}
                onChange={handleChange} />
            <button
                className="btn btn-primary m-3 w-75"
                style={{
                    borderRadius: "20px"
                }}
                onClick={handleUpdate}
            >
                Update contact
            </button>
            <button
                className="btn btn-outline-dark m-3 w-75"
                style={{
                    borderRadius: "20px"
                }}
                onClick={() => {navigate("/1")}}
            >
                Get back
            </button>

        </div>
    )
}