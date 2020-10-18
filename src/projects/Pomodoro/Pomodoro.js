import React, { useState } from "react";
import "./Pomodoro.css";

const padTime = (time) => time.toString().padStart(2, "0");

const Pomodoro = () => {
    // State
    const [timeLeft, setTimeLeft] = useState(3);
    const [title, setTitle] = useState("Let the countdown begin!");

    // helper functions
    const startTimer = () => {
        setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft >= 1) {
                    return timeLeft - 1;
                }
                return 0;
            });
        }, 1000);
    };

    // Convert time to Minutes & Seconds
    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(Math.floor(timeLeft - minutes * 60));

    return (
        <div className="pomodoro">
            <h2>{title}</h2>

            <div className="pomodoro-timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="pomodoro-buttons">
                <button onClick={startTimer}>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Pomodoro;
