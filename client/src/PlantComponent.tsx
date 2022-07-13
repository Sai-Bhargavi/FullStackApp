export function PlantComponent(props) {
    return (
        <div>
            <div>{props.plant.name} {props.plant.category} {props.plant.status}</div>
        </div>
    );
}