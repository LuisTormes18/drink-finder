import React, { useContext } from "react";

import { drinkFinderContext } from "./../../context/drinkFinder/DrinkFinderProvider";
import Card from "../ui/Card";
import Header from "../ui/Header";
import ModalRecetaActive from "../ui/ModalRecetaActive";

function HomeScreen() {
    const { recetas } = useContext(drinkFinderContext);
    return (
        <div className="home">
            <Header />

            <div className="home-content">
                <div className="list">

                    {
                                 recetas.length !== 0 &&
                        recetas.map((receta) => (
                            <Card key={receta.idDrink} receta={receta} />
                        ))
                        

                    }

                   
                </div>
            </div>
            <ModalRecetaActive />
        </div>
    );
}

export default HomeScreen;
