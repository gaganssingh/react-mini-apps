import { useState, useEffect } from "react";
import axios from "axios";

export default function useQuiz() {
    const [question, setQuestion] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("any");

    const fetchQuestion = async () => {
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

    useEffect(() => {
        fetchQuestion();

        // eslint-disable-next-line
    }, [selectedCategory]);

    return { question, fetchQuestion, selectedCategory, setSelectedCategory };
}
