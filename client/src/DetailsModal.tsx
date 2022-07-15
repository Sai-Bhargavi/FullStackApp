import { useState } from 'react';
import ReactModal from 'react-modal';

export function DetailsModal() {

    const [showModal, setshowModal] = useState(false);
    const handleOpenModal = () => setshowModal(true);
    const handleCloseModal = () => setshowModal(false);

    return (
        <div>
            <button onClick={handleOpenModal}>Trigger Modal</button>
            <ReactModal isOpen={showModal}>
                <button onClick={handleCloseModal}>Close Modal</button>
            </ReactModal>
        </div>
    );
}