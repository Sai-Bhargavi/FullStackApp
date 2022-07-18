import axios from "axios";
import { useCallback, useState } from "react";
import { PlantsListComponent } from "./PlantsListComponent";
import './FormStyle.css';
import './LoginForm.css';

export function FormComponent() {
    const [signal, setSignal] = useState([]);
    const [disableSubmitButton, setdisableSubmitButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSub = useCallback((e: any) => {
        e.preventDefault();
        var body = {
            name: e.target[0].value,
            category: e.target[1].value,
            status: e.target[2].value
        }

        axios.post('/addFruit', body, { headers: { 'content-type': 'application/json' } })
            .then(res => setSignal([res.data]))
            .catch(err => console.log(err));

    }, []);

    const handleCategoryInput = (e: any) => {
        if (e.target.value > 5 || e.target.value < 1) {
            setdisableSubmitButton(true);
            setErrorMessage('*Invalid input. Please select a category between 1 and 5.');
        }
        else {
            setdisableSubmitButton(false);
            setErrorMessage('');
        }
    };

    return (<div>
        <div className="ComponentStyle">
            <form onSubmit={handleSub}>
                <h1 style={{ textAlign: 'center' }}>Add Plant</h1>
                <label style={{ fontSize: '20px' }}>Name</label>
                <input className="inputdecor" type="text" name="name" />
                <label style={{ fontSize: '20px' }}>Category</label>
                <input className="inputdecor" type="number" name="category" onChange={handleCategoryInput} />
                {errorMessage && (<p style={{ color: 'red' }}> {errorMessage} </p>)}
                <label style={{ fontSize: '20px' }}>
                    Pick your Status:
                    <select className="SelectOptionsStyle">
                        <option className="OptionsStyle" style={{ fontSize: '20px' }} value="available">Available</option>
                        <option className="OptionsStyle" style={{ fontSize: '20px' }} value="pending">Pending</option>
                        <option className="OptionsStyle" style={{ fontSize: '20px' }} value="sold">Sold</option>
                    </select>
                </label>
                <div>
                    <input type="submit" disabled={disableSubmitButton} />
                </div>
            </form>
        </div>
        <PlantsListComponent name={signal} />
    </div >
    );
}


