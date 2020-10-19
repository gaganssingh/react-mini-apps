import { useState, useEffect } from "react";

export default function useMovement() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [direction, setDirection] = useState("down");

    // Helper Functions
    const move = (dir) => {
        setDirection(dir);
        if (dir === "up") setY((y) => y - 20);
        if (dir === "left") setX((x) => x - 20);
        if (dir === "down") setY((y) => y + 20);
        if (dir === "right") setX((x) => x + 20);
    };

    // Add an event listener to the window object
    useEffect(() => {
        // helper function for event listener
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp") move("up");
            if (e.key === "ArrowLeft") move("left");
            if (e.key === "ArrowDown") move("down");
            if (e.key === "ArrowRight") move("right");
        };

        // assign event listener
        window.addEventListener("keydown", handleKeyDown);

        // clear event listener
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return { x, y, direction, move };
}
