import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GameStats from '../components/GameStats';

// Check if GameStats component renders correctly and accurately displays session game stats
describe('GameStats Component', () => {
  it('renders the GameStats component with given props', () => {
    const props = {
      timeLeft: 20,
      totalErrors: 5,
      errors: 2,
      accuracy: 95,
      cpm: 200,
      wpm: 40,
    };  

    render(<GameStats {...props} />);

    // Check if the time left is rendered correctly
    expect(screen.getByText('Time Left:')).toBeInTheDocument();
    expect(screen.getByText('20s')).toBeInTheDocument();

    // Check if the accuracy is rendered correctly
    expect(screen.getByText('Accuracy:')).toBeInTheDocument();
    expect(screen.getByText('95%')).toBeInTheDocument();

    // Check if the errors are rendered correctly
    expect(screen.getByText('Errors:')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument(); // totalErrors + errors

    // Check if the CPM is rendered correctly
    expect(screen.getByText('CPM:')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();

    // Check if the WPM is rendered correctly
    expect(screen.getByText('WPM:')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });
});
