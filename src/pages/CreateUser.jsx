import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { InputUsername } from "../components/InputUsername.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { SingUpHeader } from "../components/SingUpHeader.jsx";

export const CreateUser = () => {

    const navigate = useNavigate()
    const {dispatch} = useGlobalReducer()


    async function addUserAgenda(username) {
        const url = "https://playground.4geeks.com/contact/agendas/" + username
        const response = await fetch(url, {
            method: "POST"
        })
        try {
            if (response.status != 201) {
                alert(`Error, el usuario: ${username}, ya existe`)
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
            <SingUpHeader label="Create account" />
            <InputUsername onSubmitAction={addUserAgenda} label="Create account" />
            <p className="py-3">¿Already have an account? <Link to={"/"}>Login</Link></p>
        </div>
    )
} 