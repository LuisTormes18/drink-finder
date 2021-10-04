import React, { createContext } from "react";

export const uiContext = createContext();

function UiProvider({ children }) {
    const contextValues = {};

    return (
        <uiContext.Provider value={contextValues}>
            {children}
        </uiContext.Provider>
    );
}

export default UiProvider;
