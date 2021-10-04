import React from "react";

import { drinkContextValues, drinkFinderContext } from "./drinkFinderContext";

function DrinkFinderProvider({ children }) {
    return (
        <drinkFinderContext.Provider value={drinkContextValues}>
            {children}
        </drinkFinderContext.Provider>
    );
}

export default DrinkFinderProvider;
