export function PlantComponent(props) {
    return (
        <div>
            <div>{props.plant.name} {props.plant.category} {props.plant.status}
                <img src={props.plant.image_url} alt="" ></img>
            </div>
        </div>
    );
}