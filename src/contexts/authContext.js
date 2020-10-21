import React, { createContext, useState, useEffect } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

// Export Global Context
export const AuthContext = createContext();

// Export Global provider
export const AuthProvider = ({ children }) => {
    // Global State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [auth0Client, setAuth0Client] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize Auth0 Client on first app load
    // Enables Login/logout functionality
    useEffect(() => {
        try {
            const initAuthClient = async () => {
                const auth0 = await createAuth0Client({
                    domain: process.env.REACT_APP_AUTH0_DOMAIN_URL,
                    client_id: process.env.JOJDW4T6tbwXpuoVBbCZGtOW0kvn3Q7G,
                });

                // Check and set user auth status (true / false)
                const isUserAuth = await auth0.isAuthenticated();
                setIsAuthenticated(isUserAuth);

                // If user is authenticated, fetch user's info
                if (isAuthenticated) {
                    const userInfo = await auth0.getUser();
                    console.log(userInfo);
                    setUser(userInfo);
                }
                setIsLoading(false);
            };
            initAuthClient();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const globalState = {
        isAuthenticated,
        user,
        isLoading,
    };

    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    );
};
