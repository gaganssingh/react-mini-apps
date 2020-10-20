import React from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";

import "./QuizMe.css";

const QuizMe = () => {
    return (
        <div className="QuizMe">
            {/* show the result modal ----------------------- */}
            {/* <ResultModal /> */}

            {/* question header ----------------------- */}
            <div className="QuizMe-question-header">
                <CategorySelector />
                <Scoreboard />
            </div>

            {/* the question itself ----------------------- */}
            <div className="QuizMe-question-main">
                <Question />
            </div>

            {/* question footer ----------------------- */}
            <div className="QuizMe-question-footer">
                <button>Go to next question 👉</button>
            </div>
        </div>
    );
};

export default QuizMe;
