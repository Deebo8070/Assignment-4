import React, { createContext, useState, useEffect } from 'react';  
import AuthMessage from './AuthMessage';
import './LoginForm.css';

export const AuthContext = createContext();

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernamesList, setUsernamesList] = useState([]);
    const [passwordsList, setPasswordsList] = useState([]);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    // Fetch users from API
    const fetchUserData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();

            const fetchedUsernames = users.map(user => user.username);
            const fetchedPasswords = users.map(user => user.email);

            setUsernamesList(fetchedUsernames);
            setPasswordsList(fetchedPasswords);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    // Handle form submission
    const handleLogin = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setMessage('Please fill in both username and password.');
            setMessageType('error');
            return;
        }

        if (password.length < 8) {
            setMessage('Password should be at least 8 characters.');
            setMessageType('error');
            return;
        }

        const userIndex = usernamesList.indexOf(username);
        if (userIndex !== -1 && passwordsList[userIndex] === password) {
            setMessage('Login successful!');
            setMessageType('success');
            setTimeout(() => {
                window.location.href = '/Courses'; // Redirect to another page
            }, 2000);
        } else {
            setMessage('Invalid username or password.');
            setMessageType('error');
        }
    };

    return (
        <AuthContext.Provider value={{ message, setMessage, messageType, setMessageType }}>
            <div className="login-form-container">
                <form onSubmit={handleLogin}>
                    {/* Username input */}
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password input */}
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="submit-button">Login</button>

                    {/* Forgot password link */}
                    <div>
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                    </div>
                </form>
                <AuthMessage />
            </div>
        </AuthContext.Provider>
    );
}

export default LoginForm;
