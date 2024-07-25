import React from 'react';
import '../styles/RestartButton.css';

const RestartButton = ({ onRestart }) => {
    return (
        <button className="restart_button" onClick={onRestart}>
            Restart
        </button>
    );
};


export default RestartButton;
