import React, { useEffect } from 'react';

const GameContainer = () => {
    useEffect(() => {
        // Event listener to handle messages from the iframe
        const handleMessage = (event) => {
            if (event.data && event.data.game === "StickHero") {
                console.log("Score from Stick Hero:", event.data.score);
                // You can now update your state or perform any other action with the score
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <iframe src="your-game-url-here" title="Stick Hero Game" width="100%" height="500px" />
    );
};

export default GameContainer;
