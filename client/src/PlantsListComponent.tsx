import axios from "axios";
import { useEffect, useState } from "react";
import { PlantComponent } from "./PlantComponent";
import { CategoryFilter } from "./CategoryFilter";
import "./FormStyle.css";

export function PlantsListComponent(props) {
    const [plants, setPlants] = useState(props.name);
    const [showAllPlants, setShowAllPlants] = useState(true);
    var show;
    if (showAllPlants) {
        show = plants.map(plant => <PlantComponent plant={plant} />);
    }
    else {
        show = "";
    }
    useEffect(
        () => {
            axios.get('/plant')
                .then(response => setPlants(response.data))
                .catch((error) => {
                    console.log(error);
                })
        }, [props.name]);

    return (
        <div className="plantslist">
            < CategoryFilter plantlist={[plants, showAllPlants, setShowAllPlants]} />
            {show}
        </div>
    );
}