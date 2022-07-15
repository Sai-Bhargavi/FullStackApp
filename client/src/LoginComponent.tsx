import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Background from "./bgimage.jpeg";

export function LoginComponenet() {
    const [errormessage, seterrormessage] = useState(" ");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        var body = {
            uname: e.target[0].value,
            pass: e.target[1].value
        }

        axios.post('/login', body, { headers: { 'content-type': 'application/json' } })
            .then(response => setIsSubmitted(true))
            .catch(err => { setIsSubmitted(false); seterrormessage("Invalid Username/Password"); });
    };

    return (
        <div style={{ backgroundImage: `url(${Background})`, height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <form onSubmit={handleSubmit} className="formdecor">
                <div className="input-container">
                    <label style={{ fontSize: '20px' }}>Username : </label>
                    <input className="inputdecor" type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label style={{ fontSize: '20px' }}>Password : </label>
                    <input className="inputdecor" type="password" name="pass" required />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <>
                {isSubmitted ? navigate("/home") : errormessage}
            </>
        </div>
    );
}