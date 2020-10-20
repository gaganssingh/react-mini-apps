import React, { useEffect, useState } from "react";
import axios from "axios";

import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./QuizMe.css";

const QuizMe = () => {
    const [question, setQuestion] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("any");
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        fetchQuestion();

        // eslint-disable-next-line
    }, [selectedCategory]);

    const fetchQuestion = async () => {
        setIsCorrect(null);

        let quizdbUrl = "https://opentdb.com/api.php?amount=1";
        // On user caterory selection
        if (selectedCategory !== "any") {
            quizdbUrl += `&category=${selectedCategory}`;
        }

        try {
            const { data } = await axios.get(quizdbUrl);
            setQuestion(data.results[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleQuestionAnswered = (answer) =>
        setIsCorrect(answer === question.correct_answer);

    return (
        <div className="QuizMe">
            {/* show the result modal */}
            {isCorrect !== null && (
                <ResultModal
                    isCorrect={isCorrect}
                    answer={question.correct_answer}
                    fetchQuestion={fetchQuestion}
                />
            )}

            {/* question header  */}
            <div className="QuizMe-question-header">
                <CategorySelector setCategory={setSelectedCategory} />
                <Scoreboard />
            </div>

            {/* the question itself  */}
            <div className="QuizMe-question-main">
                {question && (
                    <Question
                        selectedCategory={selectedCategory}
                        question={question}
                        answerQuestion={handleQuestionAnswered}
                    />
                )}
            </div>

            {/* question footer  */}
            <div className="QuizMe-question-footer">
                <button onClick={fetchQuestion}>
                    Go to next question{" "}
                    <span role="img" aria-label="Next question">
                        👉
                    </span>
                </button>
            </div>
        </div>
    );
};

export default QuizMe;
