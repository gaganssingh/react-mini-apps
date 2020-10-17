import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>React Mini Apps</h1>
            </Link>
            <Navigation />
        </header>
    );
};

export default Header;
