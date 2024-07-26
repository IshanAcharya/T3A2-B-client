import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/LoginRegister.css';

// Define LoginRegister component
const LoginRegister = () => {
    // State variables for login/register form
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const history = useHistory();


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

        // Placeholder to insert backend API call***********
        console.log('Form submitted:', { email, password, isLogin });

        // Temporary login success for UI testing purposes
        localStorage.setItem('token', 'fake-jwt-token');
        history.push('/profile');
    };

    































}