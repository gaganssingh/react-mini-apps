import React, { useEffect, useRef } from "react";
import useMovement from "./hooks/useMovement";

import "./MiniZelda.css";

const MiniZelda = () => {
    const canvasRef = useRef(null);
    const linkDownRef = useRef(null);
    const linkUpRef = useRef(null);
    const linkRightRef = useRef(null);
    const linkLeftRef = useRef(null);

    // from custom hook
    const { x, y, direction, move } = useMovement();

    // Initializing the height and width of html canvas
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;
    }, []);

    // Moving box within the html canvas, when x or y changes
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        // context.fillRect(x, y, 100, 100);

        let linkRef;
        if (direction === "down") linkRef = linkDownRef;
        if (direction === "up") linkRef = linkUpRef;
        if (direction === "left") linkRef = linkLeftRef;
        if (direction === "right") linkRef = linkRightRef;

        context.drawImage(linkRef.current, x, y);
    }, [x, y, direction]);

    return (
        <div className="MiniZelda">
            <canvas ref={canvasRef} />

            <div className="MiniZelda-arrows">
                <button onClick={() => move("up")}>Up</button>
                <button onClick={() => move("left")}>Left</button>
                <button onClick={() => move("down")}>Down</button>
                <button onClick={() => move("right")}>Right</button>
            </div>

            <div className="MiniZelda-images">
                <img
                    ref={linkDownRef}
                    src="https://i.imgur.com/JYUB0m3.png"
                    alt="Down"
                />
                <img
                    ref={linkRightRef}
                    src="https://i.imgur.com/GEXD7bk.gif"
                    alt="Right"
                />
                <img
                    ref={linkUpRef}
                    src="https://i.imgur.com/XSA2Oom.gif"
                    alt="Up"
                />
                <img
                    ref={linkLeftRef}
                    src="https://i.imgur.com/4LGAZ8t.gif"
                    alt="Left"
                />
            </div>
        </div>
    );
};

export default MiniZelda;
