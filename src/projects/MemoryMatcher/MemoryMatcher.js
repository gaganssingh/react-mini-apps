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
    const [opened, setOpened] = useState([1]);

    useEffect(() => {
        if (opened.length === 2) {
            setTimeout(() => {
                setOpened([]);
            }, 800);
        }
    }, [opened]);

    const flipCard = (index) => setOpened((opened) => [...opened, index]);

    return (
        <div className="MemoryMatcher">
            <div className="MemoryMatcher-cards">
                {doublePokemon.map((poke, idx) => {
                    let isFlipped = false;

                    if (opened.includes(idx)) isFlipped = true;
                    return (
                        <Card
                            key={idx}
                            poke={poke}
                            isFlipped={isFlipped}
                            index={idx}
                            flipCard={flipCard}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MemoryMatcher;
