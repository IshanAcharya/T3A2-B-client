import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginRegister from '../Pages/LoginRegister';

// Mock the Header component
jest.mock('../components/Header', () => () => <div>Mocked Header</div>);

// Mock axiosConfig
jest.mock('../utils/axiosConfig', () => ({
  post: jest.fn(),
}));

describe('LoginRegister Component', () => {
  it('renders the login/register component correctly', () => {
    render(
      <BrowserRouter>
        <LoginRegister />
      </BrowserRouter>
    );

    // Check if the Header component is rendered
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();

    // Check if the form elements are rendered
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('switches between login and register forms correctly', () => {
    render(
      <BrowserRouter>
        <LoginRegister />
      </BrowserRouter>
    );

    // Check if the initial button text is "Login"
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();

    // Switch to register form
    fireEvent.click(screen.getByRole('button', { name: /switch to register/i }));

    // Check if the button text is now "Register"
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('validates the form and shows error messages', () => {
    render(
      <BrowserRouter>
        <LoginRegister />
      </BrowserRouter>
    );

    // Try to submit the form without filling it
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Check if validation error messages are shown
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });
});