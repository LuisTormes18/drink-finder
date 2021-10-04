import React, { useContext, useState } from "react";

import { drinkFinderContext } from "./../../context/drinkFinder/DrinkFinderProvider";

function SearchBar() {
    const { categories, setSearch } = useContext(drinkFinderContext);

    const [inputValues, setInputValues] = useState({
        drink: "",
        category: "",
    });

    const { drink, category } = inputValues;

    const handleInputChange = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value,
        });
    };
    const handleSearch = (e) => {
        e.preventDefault();       
        setSearch(inputValues);
    };

    return (
        <div className="search-bar">
            <form>
                <input
                    type="value"
                    name="drink"
                    value={drink}
                    onChange={handleInputChange}
                />
                <select name="category" value="" onChange={handleInputChange}>
                    <option>--Select to category--</option>

                    {categories.map(({ strCategory }) => (
                        <option key={strCategory} value={strCategory}>
                            {strCategory}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Search" onClick={handleSearch} />
            </form>
        </div>
    );
}

export default SearchBar;
