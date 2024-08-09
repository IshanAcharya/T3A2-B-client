import React from 'react';
import { render, screen } from '@testing-library/react';
import PastSessionsTable from '../components/PastSessionsTable';

// Check if PastSessionsTable component renders session data correctly  
describe('PastSessionsTable Component', () => {
    const mockSessions = [
    {
      date: '2024-08-01',
      difficulty: 'Medium',
      wpm: 60,
      accuracy: 58,
      errors: 42
    },
    {
      date: '2023-08-09',
      difficulty: 'Hard',
      wpm: 70,
      accuracy: 95,
      errors: 5
    }
  ];

  it('renders the past sessions table with data', () => {
    render(<PastSessionsTable sessions={mockSessions} />);

    // Check for table headers
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Difficulty')).toBeInTheDocument();
    expect(screen.getByText('WPM')).toBeInTheDocument();
    expect(screen.getByText('Accuracy')).toBeInTheDocument();
    expect(screen.getByText('Errors')).toBeInTheDocument();

    // Check for session data in the table
    expect(screen.getByText('01-08-2024')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
    expect(screen.getByText('58%')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();

    // Check for the second session
    expect(screen.getByText('09-08-2024')).toBeInTheDocument();
    expect(screen.getByText('Hard')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
    expect(screen.getByText('95%')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('displays a message when there are no sessions', () => {
    render(<PastSessionsTable sessions={[]} />);

    // Check that the "No sessions found" message is displayed
    expect(screen.getByText('No sessions found')).toBeInTheDocument();
  });
});