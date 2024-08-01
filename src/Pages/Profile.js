import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProfileForm from '../components/ProfileForm';
import PastSessionsTable from '../components/PastSessionsTable';
import axios from '../utils/axiosConfig';
import '../styles/Profile.css';


// Define Profile component
const Profile = () => {
    // State variables for profile information and user's past typing sessions
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [sessions, setSessions] = useState([]);


    // Fetch user sessions from backend API
    useEffect(() => {
        const fetchProfile = async () => {
            try { 
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setEmail(response.data.email);
            }   catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        const fetchSessions = async () => {
            try { 
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/sessions', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSessions(response.data);
            }   catch (error) {
                console.error('Error fetching sessions:', error);
            }
        };

        fetchProfile();
        fetchSessions();

    }, []);

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
    
        // API call to update profile
        try { 
            const token = localStorage.getItem('token');
            const response = await axios.put('/api/profile', { email, password }, {
                    headers: { Authorization: `Bearer ${token}` },
            });

            setSuccess('Profile updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        }   catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    // Function to handle user logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return ( 
        <div className="profile">
            <Header />
            <Navbar />
            <div className="profile-container">
                <ProfileForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    success={success}
                />
                <button onClick={handleLogout} className="button">Logout</button>
            </div>
            <PastSessionsTable sessions={sessions} />
        </div>
    );
};

export default Profile;