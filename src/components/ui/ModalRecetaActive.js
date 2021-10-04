import React, { useContext, useState } from "react";
import { Modal } from "@material-ui/core/Modal";
import { MakeStyles } from "@material-ui/core/styles";

import { drinkFinderContext } from "./../../context/drinkFinder/DrinkFinderProvider";

function ModalRecetaActive() {
    const { recetaActive, openModal, setOpenModal } =
        useContext(drinkFinderContext);
    const getModalStyles = () => {
        return {
            top: `${50}%`,
            left: `${50}%`,
            transform: `translate(-50%,50%)`,
        };
    };
    const useStyles = MakeStyles((theme) => ({
        paper: {
            position: "absolute",
            width: 600,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const [modalStyles] = useState(getModalStyles());
    const classModal = useStyles();

    const getAndFormatIngredients = () => {
        const ingredients = [];

        for (let i = 1; i < 16; i++) {
            if (recetaActive[`strIngredients${i}`]) {
                ingredients.push(
                    <li>
                        {recetaActive[`strIngredients${i}`]} -
                        {recetaActive[`strMeasure${i}`]}
                    </li>
                );
            }
        }

        return ingredients;
    };
    return (
        <>
            <Modal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
            >
                <div styles={modalStyles} className={classModal.paper}>
                    <h2>{recetaActive?.strDrink}</h2>
                    
                    <h3>Instructions</h3>
                    <p>{recetaActive?.strInstructions}</p>
                    <div className="img">
                        <img
                            src={recetaActive.srtDrinkTumb}
                            alt={recetaActive.strDrink}
                        />
                    </div>
                    <h3>Ingredients</h3>
                    <p>
                        <ul>{getAndFormatIngredients()}</ul>
                    </p>
                </div>
            </Modal>
        </>
    );
}

export default ModalRecetaActive;
