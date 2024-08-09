import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

// CHeck if Header component renders app logo and title correctly and links to the Home page correctly
describe('Header Component', () => {
  it('renders the header with a logo and title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if the logo is rendered correctly
    const logo = screen.getByRole('img', { name: /type tutor logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/TypeTutorLogo.png');

    // Check if the title is rendered correctly
    const title = screen.getByText('Type Tutor');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1'); // Ensures the title is in an <h1> tag
  });
});