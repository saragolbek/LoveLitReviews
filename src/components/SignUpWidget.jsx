import React, { useState } from 'react';
import "../styles/login.scss"
import PropTypes from "prop-types";

const SignUpWidget = ({ onSignUpClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');
        console.log('Attempting to sign up with:', { username, password });
        fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => {
                console.log('Sign-up response:', res);
                if (!res.ok) {
                    throw new Error('Error creating account');
                }
                return res.json();
            })
            .then((data) => {
                console.log('Sign-up successful, received data:', data);
                onSignUpClick(); // Switch to Sign In
            })
            .catch((err) => {
                console.error('Sign-up failed:', err);
                setError('Could not sign up.');
            });
    };

    return (
        <form className="log-in" onSubmit={handleSignUp}>
            <h4 className="mb-4">Sign Up</h4>
            <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="btn btn-danger d-inline float-end">Sign Up</button>
            {error && <p className="text-danger">{error}</p>}
            <p className="mt-3"><button type="button" className="btn btn-link text-danger" onClick={onSignUpClick}>Already have an account? Sign In</button></p>
        </form>
    );
};

SignUpWidget.propTypes = {
    onSignUpClick: PropTypes.func.isRequired,
};

export default SignUpWidget;
