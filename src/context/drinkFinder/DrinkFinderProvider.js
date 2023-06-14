import React, { createContext, useEffect, useState } from "react";

import { startLoadCategories, startLoadDetails, startLoadRecetas } from "./../../helpers/index";

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
    if (search) {
      const loadRecetas = async () => {
        const data = await startLoadRecetas(search);
        setRecetas(data);
      };
      loadRecetas();
    }
  }, [search]);

  useEffect(() => {
    if (idSearchDetails !== null) {
      const loadDetails = async () => {
        const details = await startLoadDetails(idSearchDetails);

        setRecetaActive(details);
      };
      loadDetails();
    }
  }, [idSearchDetails]);

  useEffect(() => {
    if (!openModal) {
      setRecetaActive(null);
      setIdSearchDetails(null);
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
    <drinkFinderContext.Provider value={contextValues}>{children}</drinkFinderContext.Provider>
  );
}

export default DrinkFinderProvider;
