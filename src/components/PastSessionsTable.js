import React from 'react';
import '../styles/PastSessionsTable.css';

// Define PastSessionsTable component to display the user's past typing sessions from Type Tutor game
const PastSessionsTable = ({sessions}) => {

    // Function to format date as DD-MM-YY
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="past-sessions-table-container">
            <h2>Past Type Tutor Sessions</h2>
            {sessions.length === 0? (
                <p>No sessions found</p>
            ) : (
                <table className="past-sessions-table">
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
                                <td>{formatDate(session.date)}</td>
                                <td>{session.difficulty}</td>
                                <td>{session.wpm}</td>
                                <td>{session.accuracy}%</td>
                                <td>{session.errors}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PastSessionsTable;
