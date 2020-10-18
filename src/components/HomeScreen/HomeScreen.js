import React from "react";
import { Link } from "react-router-dom";

import "./HomeScreen.css";

const HomeScreen = () => {
    return (
        <main className="HomeScreen">
            <Link to="/pomodoro">
                <h1>Pomodoro</h1>
            </Link>

            <Link to="/markdown">
                <h1>Markdown Editor</h1>
            </Link>

            <Link to="/rockpaperscissors">
                <h1>Rock Paper Scissors</h1>
            </Link>
        </main>
    );
};

export default HomeScreen;