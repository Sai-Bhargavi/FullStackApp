import './PlantStyle.css';
export function PlantComponent(props) {
    return (
        <div className="polaroid">
            <img src={props.plant.image_url} alt="5 Terre" />
            <div className="container">
                <p>{props.plant.name} -  {props.plant.status}</p>
            </div>
        </div>
    );
}