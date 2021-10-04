import React from "react";
import { uiContext, uiContextValues } from "./uiContext";

function UiProvider({ children }) {
    return (
        <uiContext.Provider value={uiContextValues}>
            {children}
        </uiContext.Provider>
    );
}

export default UiProvider;
