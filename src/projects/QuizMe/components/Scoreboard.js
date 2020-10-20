import React from "react";

export default function Scoreboard() {
    return (
        <div className="QuizMe-scoreboard">
            <div className="QuizMe-wrong">
                <strong>0</strong>
                <span>wrong</span>
            </div>
            <div className="QuizMe-correct">
                <strong>0</strong>
                <span>correct</span>
            </div>
        </div>
    );
}
