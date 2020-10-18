import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header className="Header">
            <div className="logo">
                <Link to="/">React Mini Apps</Link>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
