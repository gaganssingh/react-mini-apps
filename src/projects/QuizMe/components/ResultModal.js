import React from "react";

export default function ResultModal() {
    return (
        <div className="QuizMe-result-modal">
            <div className="QuizMe-overlay" />
            <div className="QuizMe-result-modal-content">
                <h3>
                    <span role="img" aria-label="yay">
                        👊👊👊
                    </span>
                    <br />
                    YOU WON!
                </h3>

                <h3>
                    <span role="img" aria-label="nay">
                        😟😢😟
                    </span>
                    <br />
                    YOU LOST!
                </h3>

                <div className="QuizMe-correct-answer">
                    <small>The correct answer was:</small>
                    <br />
                    <strong>Answer here</strong>
                </div>

                <button>
                    Go to next question{" "}
                    <span role="img" aria-label="next question">
                        👉
                    </span>
                </button>
            </div>
        </div>
    );
}
