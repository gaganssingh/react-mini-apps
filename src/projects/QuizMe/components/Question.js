import React from "react";
import shuffle from "lodash.shuffle";
import dompurify from "dompurify";

import Loading from "../../../components/Loading/Loading";

const Question = ({ question, answerQuestion, selectedCategory }) => {
    // Sanitize question title before setting it as
    const sanitizer = dompurify.sanitize;

    // Wait to fetch a question from api
    if (question.length === 0) {
        return <Loading />;
    }

    const answers = shuffle([
        ...question.incorrect_answers,
        question.correct_answer,
    ]);

    return (
        <div className="QuizMe-question">
            <h2
                dangerouslySetInnerHTML={{
                    __html: sanitizer(question.question),
                }}
            />

            {answers.map((answer) => (
                <button
                    key={answer}
                    onClick={() => answerQuestion(answer)}
                    dangerouslySetInnerHTML={{
                        __html: sanitizer(answer),
                    }}
                />
            ))}

            {selectedCategory === "any" && (
                <div className="QuizMe-category">
                    <h4>From category:</h4>
                    <h5
                        dangerouslySetInnerHTML={{
                            __html: sanitizer(question.category),
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Question;
