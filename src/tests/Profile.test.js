import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../Pages/Profile';

// Mock the Header component
jest.mock('../components/Header', () => () => <div>Mocked Header</div>);

// Mock the Navbar component
jest.mock('../components/Navbar', () => () => <div>Mocked Navbar</div>);

// Mock the PastSessionsTable component
jest.mock('../components/PastSessionsTable', () => () => <div>Mocked PastSessionsTable</div>);

// Mock axiosConfig
jest.mock('../utils/axiosConfig', () => ({
  get: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

describe('Profile Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock axios get requests
    const axiosGet = require('../utils/axiosConfig').get;
    axiosGet.mockResolvedValue({ data: { email: 'test@example.com' } });

    // Mock localStorage
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'token') {
        return 'fake-token';
      }
      return null;
    });
  });

  it('renders the Profile component correctly', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      );
    });

    // Check if the Header component is rendered
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();

    // Check if the Navbar component is rendered
    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();

    // Check if the PastSessionsTable component is rendered
    expect(screen.getByText('Mocked PastSessionsTable')).toBeInTheDocument();
  });

  it('handles logout button click', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );

    // Mock the localStorage.removeItem function
    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    // Mock the window.location.href
    delete window.location;
    window.location = { href: jest.fn() };

    // Click the logout button
    fireEvent.click(screen.getByText('Logout'));

    // Check if the token is removed from localStorage
    expect(removeItemSpy).toHaveBeenCalledWith('token');

    // Check if the user is redirected to the homepage
    expect(window.location.href).toBe('/');
  });
});