import { useEffect, useState } from "react";
import "./FilterStyle.css";

export function CategoryFilter(props) {
    // List of all cars satisfing all the filters
    const [filteredList, setFilteredList] = useState(props.plantlist);
    // Selected Brand name filter
    const [selectedCategory, setSelectedCategory] = useState("");

    const filterByCategory = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedCategory) {
            return filteredData;
        }

        const filteredPlants = filteredData.filter(
            (plant) => plant.category.plant == selectedCategory
        );
        return filteredPlants;
    };


    // Update seletedBrand state
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    useEffect(() => {
        var filteredData = filterByCategory(props.plantlist);

        setFilteredList(filteredData);
    }, [selectedCategory]);

    return (
        <div className="CategoryFilter">
            <div className="brand-filter">
                <div>Filter by Category :</div>
                <select
                    id="category-input"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">All</option>
                    <option value="trees">Trees</option>
                    <option value="shrubs">Shrubs</option>
                    <option value="climbers">Climbers</option>
                </select>
            </div>


            <div id="car-list">
                {filteredList.map((item, index) => (
                    <div className="car-item" key={index}>
                        <div className="car-name">{`Name: ${item.name}`}</div>
                        {/* <div className="car-year">{`Year: ${item.release_year}`}</div> */}
                        <img className="car-image" src={item.image_url} alt="car-img" />
                    </div>
                ))}
            </div>
        </div>
    );
}