import axios from "axios";
import { useCallback, useState } from "react";
import { PlantsListComponent } from "./PlantsListComponent";
import './FormStyle.css';

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
                <h2 style={{ backgroundColor: "lightcoral" }}>Add Plant</h2>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Category</label>
                <input type="number" name="category" />
                <label>
                    Pick your Status:
                    <select className="SelectOptionsStyle">
                        <option className="OptionsStyle" value="available">Available</option>
                        <option className="OptionsStyle" value="pending">Pending</option>
                        <option className="OptionsStyle" value="sold">Sold</option>
                    </select>
                </label>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
        <PlantsListComponent name={signal} />
    </div >
    );
}


