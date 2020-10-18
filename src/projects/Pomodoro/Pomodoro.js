import React, { useState, useRef } from "react";
import "./Pomodoro.css";

const padTime = (time) => time.toString().padStart(2, "0");

const Pomodoro = () => {
    // State
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [title, setTitle] = useState("Let the countdown begin!");
    const [isRunning, setIsRunning] = useState(false);

    // To persist state/data between renders, use the
    // useRef hook
    const intervalRef = useRef(null);

    // helper functions
    const startTimer = () => {
        setIsRunning(true);
        setTitle("You're doing great!");
        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft >= 1) {
                    return timeLeft - 1;
                }
                resetTimer();
                return 0;
            });
        }, 1000);
    };

    const stopTimer = () => {
        setIsRunning(false);
        setTitle("Keep Going!");
        clearInterval(intervalRef.current);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTitle("Click start to go again");
        setTimeLeft(25 * 60);
    };

    // Convert time to Minutes & Seconds
    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(Math.floor(timeLeft - minutes * 60));

    // Render
    return (
        <div className="pomodoro">
            <h2>{title}</h2>

            <div className="pomodoro-timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="pomodoro-buttons">
                <button onClick={startTimer} disabled={isRunning}>
                    Start
                </button>
                <button onClick={stopTimer} disabled={!isRunning}>
                    Stop
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Pomodoro;
