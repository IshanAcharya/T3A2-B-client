import React from 'react';
import '../styles/PastSessionsTable.css';

const PastSessionsTable = ({sessions}) => {
    return (
        <div className="sessions-container">
            <h2>Past Type Tutor Sessions</h2>
            <table className="sessions-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Difficulty</th>
                        <th>WPM</th>
                        <th>Accuracy</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session, index) => (
                        <tr key={index}>
                            <td>{session.date}</td>
                            <td>{session.difficulty}</td>
                            <td>{session.wpm}</td>
                            <td>{session.accuracy}</td>
                            <td>{session.errors}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PastSessionsTable;
