import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';

// Mock the Header component
jest.mock('../components/Header', () => () => <div>Mocked Header</div>);

describe('Home Component', () => {
  it('renders the home component', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check if the Header component is rendered
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();

    // Check if the paragraph text is rendered
    expect(screen.getByText("In today's digital age, typing speed and accuracy are crucial life skills. Don't get left behind, improve your skills with the Type Tutor App.")).toBeInTheDocument();

    // Check if the Login/Register button is rendered
    expect(screen.getByText('Login/Register')).toBeInTheDocument();
  });
});
