import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <>
            <Link to="/pomodoro">
                <h1>Pomodoro</h1>
            </Link>
        </>
    );
};

export default HomeScreen;
