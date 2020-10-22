import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
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

                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>

                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
