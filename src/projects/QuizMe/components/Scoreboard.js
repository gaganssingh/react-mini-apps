import React from "react";

const Scoreboard = ({ correctScore, incorrectScore }) => {
    return (
        <div className="QuizMe-scoreboard">
            <div className="QuizMe-wrong">
                <strong>{incorrectScore}</strong>
                <span>wrong</span>
            </div>
            <div className="QuizMe-correct">
                <strong>{correctScore}</strong>
                <span>correct</span>
            </div>
        </div>
    );
};

export default Scoreboard;
