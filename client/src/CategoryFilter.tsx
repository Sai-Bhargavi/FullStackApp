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
            <div className="category-filter">
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



            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
            <div>
                {
            var modal = document.getElementById("myModal");

                // Get the button that opens the modal
                var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];

                    // When the user clicks the button, open the modal 
                    btn.onclick = function() {
                        modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
                        span.onclick = function() {
                            modal.style.display = "none";
}

                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
  if (event.target == modal) {
                            modal.style.display = "none";
  }
}

}

                    </div>



                    <div id="plant-list">
                        {filteredList.map((item, index) => (
                            <div className="plant-item" key={index}>
                                <div className="plant-name">{`Name: ${item.name}`}</div>
                                <img className="plant-image" src={item.image_url} alt="plant-image" onClick={openModal} />
                            </div>
                        ))}
                    </div>
            </div>






            );
}