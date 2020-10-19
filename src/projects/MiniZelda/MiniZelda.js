import React, { useState, useEffect, useRef } from "react";

import "./MiniZelda.css";

const MiniZelda = () => {
    const canvasRef = useRef(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // Initializing the height and width of html canvas
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;
    }, []);

    // Moving box within the html canvas
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, window.innerHeight, window.innerWidth);
        context.fillRect(x, y, 100, 100);
    }, [x, y]);

    return (
        <div className="MiniZelda">
            <canvas ref={canvasRef} />

            <div className="MiniZelda-arrows">
                <button onClick={() => setY((y) => y - 20)}>Up</button>
                <button onClick={() => setX((x) => x - 20)}>Left</button>
                <button onClick={() => setY((y) => y + 20)}>Down</button>
                <button onClick={() => setX((x) => x + 20)}>Right</button>
            </div>

            <div className="MiniZelda-images">
                <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
                <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
                <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
                <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
            </div>
        </div>
    );
};

export default MiniZelda;
