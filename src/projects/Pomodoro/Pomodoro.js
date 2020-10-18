import React from "react";
import "./Pomodoro.css";

const Pomodoro = () => {
    return (
        <div className="pomodoro">
            <h2>Pomodoro!</h2>

            <div className="pomodoro-timer">
                <span>00</span>
                <span>:</span>
                <span>00</span>
            </div>

            <div className="pomodoro-buttons">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Pomodoro;
