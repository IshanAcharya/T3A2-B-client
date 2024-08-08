import React from 'react';
import '../styles/RestartButton.css';

// Define RestartButton component to trigger typing session restart
const RestartButton = ({ onRestart }) => {
    return (
        <button className="restart_button" onClick={onRestart}>
            Restart
        </button>
    );
};


export default RestartButton;
