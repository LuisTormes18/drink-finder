import React, { useContext, useState } from "react";

import { drinkFinderContext } from "./../../context/drinkFinder/DrinkFinderProvider";

function SearchBar() {
  const { categories, setSearch } = useContext(drinkFinderContext);

  const [inputValues, setInputValues] = useState({
    drink: "",
    category: "",
  });

  const { drink, category } = inputValues;

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();

    console.log(category);
    if (category.trim() === "") {
      alert("Seleccione una categoria");
      return;
    }

    if (drink.trim() === "") {
      alert("Seleccione un ingrediente");
      return;
    }
    setSearch(inputValues);
  };

  return (
    <div className="search-bar">
      <form>
        <input
          type="value"
          name="drink"
          value={drink}
          placeholder="Ingredient"
          onChange={handleInputChange}
        />
        <select name="category" onChange={handleInputChange}>
          <option>--Select to category--</option>

          {categories.map(({ strCategory }) => (
            <option key={strCategory} value={strCategory}>
              {strCategory}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="Search"
          className="btn"
          onClick={handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchBar;
