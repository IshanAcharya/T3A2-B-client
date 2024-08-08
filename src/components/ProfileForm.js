import React, { useState } from 'react';
import '../styles/ProfileForm.css'

// Define ProfileForm component to handle user's profile information update on profile page
const ProfileForm = ({ email, setEmail, password, setPassword, handleSubmit, errors, success }) => {
    return (
        <div className="profile-form">
            <h2>Profile Information</h2>
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
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="update" className="update-button">Update Profile</button>
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
};

export default ProfileForm;