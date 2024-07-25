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



    
}