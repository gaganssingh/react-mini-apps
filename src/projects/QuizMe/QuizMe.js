import React, { useState } from "react";

import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import useQuiz from "./hooks/useQuiz";
import "./QuizMe.css";

const QuizMe = () => {
    // prettier-ignore
    const { question, fetchQuestion, selectedCategory, setSelectedCategory } = useQuiz();

    // State
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctScore, setCorrectScore] = useState(0);
    const [incorrectScore, setIncorrectScore] = useState(0);

    // Helper functions
    const handleQuestionAnswered = (answer) => {
        const isAnsweredQuesCorrect = answer === question.correct_answer;
        setIsCorrect(isAnsweredQuesCorrect);

        isAnsweredQuesCorrect
            ? setCorrectScore((prevScore) => prevScore + 1)
            : setIncorrectScore((prevScore) => prevScore + 1);
    };

    const handleNextQuestion = () => {
        setIsCorrect(null);
        fetchQuestion();
    };

    return (
        <div className="QuizMe">
            {/* show the result modal */}
            {isCorrect !== null && (
                <ResultModal
                    isCorrect={isCorrect}
                    answer={question.correct_answer}
                    handleNextQuestion={handleNextQuestion}
                />
            )}

            {/* question header  */}
            <div className="QuizMe-question-header">
                <CategorySelector setCategory={setSelectedCategory} />
                <Scoreboard
                    correctScore={correctScore}
                    incorrectScore={incorrectScore}
                />
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
                <button onClick={handleNextQuestion}>
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
