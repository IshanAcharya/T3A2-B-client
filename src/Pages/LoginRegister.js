import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axiosInstance from '../utils/axiosConfig';
import '../styles/LoginRegister.css';

// Define LoginRegister component
const LoginRegister = () => {
    // State variables for login/register form
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();


    // Function to validate login and register form inputs
    const validateForm = () => {
        const errors = {};

        // Validate email field
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        // Validate password field
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Function to manage form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try { 
            const endpoint = isLogin? '/auth/login' : '/auth/register';
            const response = await axiosInstance.post(endpoint, { email, password });

            localStorage.setItem('token', response.data.token);
            navigate('/profile');
        }   catch (error) {
            setErrors('Error during authentication:', error);
        }
    };

    return (
        <div className="login-register">
            <Header />
            <div className="form-container">
                <div className="toggle-container">
                    <button 
                        className={`toggle-button ${isLogin ? 'active' : ''}`} 
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button 
                        className={`toggle-button ${!isLogin ? 'active' : ''}`} 
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </button>
                </div>
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit" className="submit-button">{isLogin ? 'Login' : 'Register'}</button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
