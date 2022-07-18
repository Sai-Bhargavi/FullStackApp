import { useState } from 'react';
import './PlantStyle.css';
import Modal from 'react-modal';

export function PlantComponent(props) {
    const [showModal, setshowModal] = useState(false);

    const handleOpenModal = () => setshowModal(true);
    const handleCloseModal = () => setshowModal(false);
    return (
        <div className="polaroid">
            <img src={props.plant.image_url} onClick={handleOpenModal} />
            <div className="container">
                <p>{props.plant.category.plant}:{props.plant.name} -  {props.plant.status}</p>
                <Modal className="modal-decor" isOpen={showModal} >
                    <button onClick={handleCloseModal}>x</button>
                    <p>Age:4.5 Months old</p>
                    <p>Contact Details: 9876549876</p>
                </Modal>
            </div>
        </div>
    );
}