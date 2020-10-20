import React from "react";
import shuffle from "lodash.shuffle";
import dompurify from "dompurify";

import Loading from "../../../components/Loading/Loading";

const Question = ({ question }) => {
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

            {answers.map((answer, index) => (
                <button key={index}>{answer}</button>
            ))}
        </div>
    );
};

export default Question;
