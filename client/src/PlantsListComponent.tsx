import axios from "axios";
import { useEffect, useState } from "react";
import { PlantComponent } from "./PlantComponent";
import { CategoryFilter } from "./CategoryFilter";

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
        <div>
            < CategoryFilter plantlist={plants} />;
            {plants.map(plant => <PlantComponent plant={plant} />)}
        </div>
    );
}