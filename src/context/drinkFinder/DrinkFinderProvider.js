import React, { createContext, useEffect, useState } from "react";

import {
    startLoadCategories,
    startLoadRecetas,
    startLoadDetails,
} from "./../../helpers/index";

export const drinkFinderContext = createContext();

function DrinkFinderProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState({});
    const [recetas, setRecetas] = useState([]);
    const [idSearchDetails, setIdSearchDetails] = useState(null);
    const [recetaActive, setRecetaActive] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    // load categories
    useEffect(() => {
        const loadCategories = async () => {
            const data = await startLoadCategories();
            setCategories(data);
        };
        loadCategories();
    }, []);

    useEffect(() => {
        console.log("Search....", search);

        const loadRecetas = async () => {
            const data = await startLoadRecetas(search);

            setRecetas(data);
        };
        loadRecetas();
    }, [search]);

    useEffect(() => {
        const loadDetails = async () => {
            const details = await startLoadDetails(setIdSearchDetails);
            
              
            setRecetaActive(details);
        };
        loadDetails();
    }, [idSearchDetails]);
    
    useEffect(() => {
        if (!openModal) {
            setRecetaActive(null);
        }
    }, [openModal]);

    const contextValues = {
        categories,
        setSearch,
        recetas,
        recetaActive,
        setIdSearchDetails,
        openModal,
        setOpenModal,
    };

    return (
        <drinkFinderContext.Provider value={contextValues}>
            {children}
        </drinkFinderContext.Provider>
    );
}

export default DrinkFinderProvider;
