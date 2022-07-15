import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="form">
            <>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
                {isSubmitted ? navigate("/home") : errormessage}
            </>
        </div>
    );
}