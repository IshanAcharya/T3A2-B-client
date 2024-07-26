import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProfileForm from '../components/ProfileForm';
import PastSessionsTable from '../components/PastSessionsTable';
import '../styles/Profile.css';


// Define Profile component
const Profile = () => {
    // State variables for profile information and user's past typing sessions
    const [email, setEmail] = useState('userexample@email.com');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [sessions, setSessions] = useState([]);


    // Fetch user sessions from backend API - WIP until backend is coded********
    useEffect(() => {

    }

    // Function to validate update form input
    const validateForm = () => {
        const errors = {};

        // Validate email field
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        // Validate password field
        
        if (password && password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Function to handle form submission when updating user email address or password
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
    

        // Add code for API call to update profile - WIP until backend is coded********


        // Temporary success message for UI testing
        setSuccess('Profile updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
    };

    // Function to handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }







};
