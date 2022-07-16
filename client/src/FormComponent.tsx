import axios from "axios";
import { useCallback, useState } from "react";
import { PlantsListComponent } from "./PlantsListComponent";
import './FormStyle.css';
import './LoginForm.css';

export function FormComponent() {
    const [signal, setSignal] = useState([]);

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
    return (<div>
        <div className="ComponentStyle">
            <form onSubmit={handleSub}>
                <h1 style={{ textAlign: 'center' }}>Add Plant</h1>
                <label style={{ fontSize: '20px' }}>Name</label>
                <input className="inputdecor" type="text" name="name" />
                <label style={{ fontSize: '20px' }}>Category</label>
                <input className="inputdecor" type="number" name="category" />
                <label style={{ fontSize: '20px' }}>
                    Pick your Status:
                    <select className="SelectOptionsStyle">
                        <option className="OptionsStyle" style={{ fontSize: '20px' }} value="available">Available</option>
                        <option className="OptionsStyle" style={{ fontSize: '20px' }} value="pending">Pending</option>
                        <option className="OptionsStyle" style={{ fontSize: '20px' }} value="sold">Sold</option>
                    </select>
                </label>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
        {/* <PlantsListComponent name={signal} /> */}
    </div >
    );
}


