import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RestartButton from '../components/RestartButton';

// Check if RestartButton component triggers onRestart when clicked
describe('RestartButton Component', () => {
    it('calls onRestart when clicked', () => {
        const onRestart = jest.fn();
        render(<RestartButton onRestart={onRestart} />);

        // Find button and click it
        const button = screen.getByRole('button', { name: /restart/i });
        fireEvent.click(button);

        // Verify that onRestart was called
        expect(onRestart).toHaveBeenCalledTimes(1);
    });
});

