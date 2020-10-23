import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Navigation.css";

const Navigation = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>

                {!isAuthenticated && (
                    <li
                        className="Navigation-pointer"
                        onClick={loginWithRedirect}
                    >
                        Login
                    </li>
                )}

                {isAuthenticated && (
                    <li
                        className="Navigation-pointer"
                        onClick={() =>
                            logout({ returnTo: window.location.origin })
                        }
                    >
                        Logout
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
