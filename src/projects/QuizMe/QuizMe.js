import React, { useEffect, useState } from "react";
import axios from "axios";

import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./QuizMe.css";

const quizdbUrl = "https://opentdb.com/api.php?amount=1";

const QuizMe = () => {
    const [question, setQuestion] = useState([]);
    useEffect(() => {
        fetchQuestion();
    }, []);

    const fetchQuestion = async () => {
        try {
            const { data } = await axios.get(`${quizdbUrl}`);
            setQuestion(data.results[0]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="QuizMe">
            {/* show the result modal */}
            {/* <ResultModal /> */}

            {/* question header  */}
            <div className="QuizMe-question-header">
                <CategorySelector />
                <Scoreboard />
            </div>

            {/* the question itself  */}
            <div className="QuizMe-question-main">
                {question && <Question question={question} />}
            </div>

            {/* question footer  */}
            <div className="QuizMe-question-footer">
                <button>Go to next question 👉</button>
            </div>
        </div>
    );
};

export default QuizMe;
