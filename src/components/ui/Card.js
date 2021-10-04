import React, { useContext } from "react";
import { drinkFinderContext } from "../../context/drinkFinder/DrinkFinderProvider";

function Card({ receta }) {
    const { setIdSearchDetails, setOpenModal } = useContext(drinkFinderContext);

    const handleSeeDetails = (id) => {
        setIdSearchDetails(id);
        setOpenModal(true);
    };
    return (
        <div className="list-card">
        <br />
            <h2 className="card-title">{receta.strDrink}</h2>
            <br />
            <img
                className="card-img"
                src={receta.strDrinkThumb}
                alt={`${receta.strDrink}`}
            />
            <div className="card-body">
                <button
                    onClick={() => {
                        handleSeeDetails(receta.strIdDrink);
                    }}
                    className="card-btn"
                >
                    See Details
                </button>
            </div>
        </div>
    );
}

export default Card;
