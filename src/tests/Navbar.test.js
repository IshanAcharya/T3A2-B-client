import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Check if Navbar component renders correctly and opens and closes properly
describe('Navbar Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
    });

    it('renders the hamburger menu and links', () => {
        // Check if the hamburger menu is rendered
        expect(screen.getByText('☰')).toBeInTheDocument();

        // Check that nav links are not visible without being clicked
        expect(screen.queryByText('Profile')).not.toBeInTheDocument();
        expect(screen.queryByText('Type Tutor')).not.toBeInTheDocument();
    });

    it('toggles nav links visibility on hamburger click', () => {
        const hamburger = screen.getByText('☰');
        // Open menu
        fireEvent.click(hamburger);
        expect(screen.getByText('Profile')).toBeVisible();
        expect(screen.getByText('Type Tutor')).toBeVisible();
        
        // Close menu
        fireEvent.click(hamburger);
        expect(screen.queryByText('Profile')).not.toBeVisible();
        expect(screen.queryByText('Type Tutor')).not.toBeVisible();
    });
});