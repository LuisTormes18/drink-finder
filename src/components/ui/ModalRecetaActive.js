import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

import { drinkFinderContext } from "./../../context/drinkFinder/DrinkFinderProvider";

function ModalRecetaActive() {
    const { recetaActive, openModal, setOpenModal } =
        useContext(drinkFinderContext);

    const useStyles = makeStyles((theme) => ({
        paper: {
            top: `${50}%`,
            left: `${50}%`,
            transform: `translate( -${50}%, -${50}%)`,
            position: "absolute",
            width: 450,
            maxWidth:'90%',
            overflowY:'scroll',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            paddingTop:'40px',
            paddingBotton:'40px',
            display:'block',
            height:'100%',
        },
    }));

    const classModal = useStyles();

    const getAndFormatIngredients = () => {
        const ingredients = [];

        for (let i = 1; i < 16; i++) {
            if (recetaActive[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={`strIngredient${i}`}>
                        {recetaActive[`strIngredient${i}`]} -
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
                onClick={() => {
                    setOpenModal(false);
                }}
            >
                <div className={classModal.paper}>
                    <br />
                    <h2>{recetaActive?.strDrink}</h2>
                    <br />

                    <h3>Instructions</h3>
                    <br />

                    <p>{recetaActive?.strInstructions}</p>
                    <br />

                    <div className="modal-img">
                        <img
                            src={recetaActive?.strDrinkThumb}
                            alt={recetaActive?.strDrink}
                        />
                    </div>
                    <br />

                    <h3>Ingredients</h3>
                    <br />
                    <ul>{!!recetaActive && getAndFormatIngredients()}</ul>
                </div>
            </Modal>
        </>
    );
}

export default ModalRecetaActive;
