import React from "react";

const Card = ({ pokemon, isFlipped, flipCard, index }) => {
    return (
        <button
            className={`MemoryMatcher-pokemon-card ${
                isFlipped ? "MemoryMatcher-flipped" : ""
            }`}
            onClick={() => flipCard(index)}
        >
            <div className="MemoryMatcher-inner">
                <div className="MemoryMatcher-front">
                    <img
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width="100"
                    />
                </div>
                <div className="MemoryMatcher-back">?</div>
            </div>
        </button>
    );
};

export default Card;
