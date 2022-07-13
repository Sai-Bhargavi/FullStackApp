import axios from "axios";
import { useEffect, useState } from "react";
import { PlantComponent } from "./PlantComponent";

export function PlantsListComponent(props) {
    const [plants, setPlants] = useState(props.name);
    useEffect(
        () => {
            axios.get('/plant')
                .then(response => setPlants(response.data))
                .catch((error) => {
                    console.log(error);
                })
        }, [props.name]);

    return (
        <ul>{plants.map(plant => <li> <PlantComponent plant={plant} /> </li>)}</ul>
    );
}