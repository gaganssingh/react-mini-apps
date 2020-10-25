import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import shuffle from "lodash.shuffle";

import "./MemoryMatcher.css";

const pokemon = [
    { id: 4, name: "charizard" },
    { id: 10, name: "caterpie" },
    { id: 77, name: "ponyta" },
    { id: 108, name: "lickitung" },
    { id: 132, name: "ditto" },
    { id: 133, name: "eevee" },
];

// Double the number of pokemon and shuffle
const doublePokemon = shuffle([...pokemon, ...pokemon]);

const MemoryMatcher = () => {
    const [opened, setOpened] = useState([]);
    const [matched, setMatched] = useState([]);

    // Check if user selection results in a match
    useEffect(() => {
        if (opened.length < 2) return;

        const firstPokemon = doublePokemon[opened[0]];
        const secondPokemon = doublePokemon[opened[1]];

        if (firstPokemon.name === secondPokemon.name) {
            setMatched((matched) => [...matched, firstPokemon.id]);
        }
    }, [opened]);

    // Close all cards afte two cards have been selected
    useEffect(() => {
        if (opened.length === 2) {
            setTimeout(() => {
                setOpened([]);
            }, 800);
        }
    }, [opened]);

    // Check winner
    useEffect(() => {
        if (matched.length === pokemon.length) alert("You Won!!");
    }, [matched]);

    const flipCard = (index) => setOpened((opened) => [...opened, index]);

    const resetGame = () => {
        setOpened([]);
        setMatched([]);
    };

    return (
        <div className="MemoryMatcher">
            <div className="MemoryMatcher-cards">
                {doublePokemon.map((pokemon, idx) => {
                    let isFlipped = false;

                    if (opened.includes(idx)) isFlipped = true;
                    if (matched.includes(pokemon.id)) isFlipped = true;
                    return (
                        <Card
                            key={idx}
                            pokemon={pokemon}
                            isFlipped={isFlipped}
                            index={idx}
                            flipCard={flipCard}
                        />
                    );
                })}
            </div>
            <div className="MemoryMatcher-reset-button" onClick={resetGame}>
                Reset Game
            </div>
        </div>
    );
};

export default MemoryMatcher;
