import axios from "axios";
import { useCallback, useState } from "react";
import { PlantsListComponent } from "./PlantsListComponent";

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
    return (
        <div>
            <form onSubmit={handleSub}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Category</label>
                <input type="number" name="category" />
                <label>
                    Pick your Status:
                    <select >
                        <option value="available">Available</option>
                        <option value="pending">Pending</option>
                        <option value="sold">Sold</option>
                    </select>
                </label>
                <input type="submit" />
            </form>
            <PlantsListComponent name={signal} />
        </div>
    );
}


