import React from 'react';
import '../styles/GameStats.css';

// Define GameStats component to display TypeTutor game's current game statistics
const GameStats = ({ timeLeft, totalErrors, errors, accuracy, cpm, wpm}) => {
    return (
        <div className="game-stats">
            <p className="timer">Time Left: <span className="curr_time">{timeLeft}s</span></p>
            <p className="accuracy">Accuracy: <span className="curr_accuracy">{accuracy}%</span></p>
            <p className="errors">Errors: <span className="curr_errors">{totalErrors + errors}</span></p>
            <p className="cpm">CPM: <span className="curr_cpm">{cpm}</span></p>
            <p className="wpm">WPM: <span className="curr_wpm">{wpm}</span></p>
        </div>
    );
};


export default GameStats;