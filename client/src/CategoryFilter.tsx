import { useEffect, useState } from "react";
import "./FilterStyle.css";
import Modal from 'react-modal';

export function CategoryFilter(props) {
    // List of all cars satisfing all the filters
    const [filteredList, setFilteredList] = useState(props.plantlist[0]);
    // Selected Brand name filter
    const [selectedCategory, setSelectedCategory] = useState("");

    const [showModal, setshowModal] = useState(false);
    const handleOpenModal = () => setshowModal(true);
    const handleCloseModal = () => setshowModal(false);

    const filterByCategory = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedCategory) {
            return filteredData;
        }

        const filteredPlants = filteredData.filter(
            (plant) => plant.category.plant === selectedCategory
        );
        return filteredPlants;
    };


    // Update seletedBrand state
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        props.plantlist[2](false);
    };

    useEffect(() => {
        var filteredData = filterByCategory(props.plantlist[0]);

        setFilteredList(filteredData);
    }, [selectedCategory]);

    return (
        <div>
            <div className="category-filter">
                <div>Filter by Category </div>
                <select
                    // id="category-input"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value=""></option>
                    <option value="trees">Trees</option>
                    <option value="herbs">Herbs</option>
                    <option value="shrubs">Shrubs</option>
                    <option value="creepers">Creepers</option>
                    <option value="climbers">Climbers</option>
                </select>
            </div>

            <div className="CategoryFilter">
                {filteredList.map((item, index) => (
                    <div className="plant-item" key={index}>
                        <div className="plant-name">{`Name: ${item.name}`}</div>
                        <img className="plant-image" src={item.image_url} alt="plant-image" onClick={handleOpenModal} />
                        <Modal className="modal-decor" isOpen={showModal} >
                            <button onClick={handleCloseModal}>x</button>
                            <p>Age:4.5 Months old</p>
                            <p>Contact Details: 9876549876</p>
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    );
}