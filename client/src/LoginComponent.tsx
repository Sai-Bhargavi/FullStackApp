import axios from "axios";

function LoginComponenet() {
    const handleSubmit = (e) => {
        e.preventDefault();
        var body = {
            uname: e.target[0].value,
            pass: e.target[1].value
        }

        axios.post('/login', body, { headers: { 'content-type': 'application/json' } })
            .then(res => res.data)
            .catch(err => console.log(err));

    };
}
return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
        </form>
    </div>
);
}