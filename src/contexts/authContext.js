import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => (
    <AuthContext.Provider value={{ test: "State from the context" }}>
        {children}
    </AuthContext.Provider>
);
