import React from "react";
import dompurify from "dompurify";

const ResultModal = ({ isCorrect, answer, fetchQuestion }) => {
    // Sanitize question title before setting it as
    const sanitizer = dompurify.sanitize;
    return (
        <div
            className={`QuizMe-result-modal ${
                isCorrect ? "QuizMe-is-correct" : "QuizMe-is-wrong"
            }`}
        >
            <div className="QuizMe-overlay" />
            <div className="QuizMe-result-modal-content">
                {isCorrect && (
                    <h3>
                        <span role="img" aria-label="yay">
                            👊👊👊
                        </span>
                        <br />
                        YOU WON!
                    </h3>
                )}

                {!isCorrect && (
                    <h3>
                        <span role="img" aria-label="nay">
                            😟😢😟
                        </span>
                        <br />
                        YOU LOST!
                    </h3>
                )}

                {!isCorrect && (
                    <div className="QuizMe-correct-answer">
                        <small>The correct answer was:</small>
                        <br />
                        <strong
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(answer),
                            }}
                        />
                    </div>
                )}

                <button onClick={fetchQuestion}>
                    Go to next question{" "}
                    <span role="img" aria-label="next question">
                        👉
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ResultModal;
