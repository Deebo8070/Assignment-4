import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import AuthMessage from './AuthMessage';

export const DisplayContext = createContext(null);

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const userData = 'https://jsonplaceholder.typicode.com/users';

    // Handle login form submission
    function handleLogin() {
        // Username and password validation
        if (!username || !password) {
            setType('error');
            setMessage('Username and password cannot be empty');
            return;
        }

        if (password.length < 8) {
            setType('error');
            setMessage('Password must be at least 8 characters');
            return;
        }

        fetch(userData)
            .then(response => response.json())
            .then(users => {
                const foundUser = users.find(user => user.username === username);

                if (foundUser && password === foundUser.email) {
                    setType('success');
                    setMessage('Login successful! Redirecting...');
                    setTimeout(() => {
                        navigate('/courses');
                    }, 2000);
                } else {
                    setType('error');
                    setMessage('Incorrect username or password');
                }
            })
            .catch(() => {
                setType('error');
                setMessage('Could not fetch user data');
            });
    }

    // Effect to reset messages when inputs change
    useEffect(() => {
        setType('');
        setMessage('');
    }, [username, password]);

    return (
        <div className='loginForm'>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <h1>Login</h1>
                <label>Username</label>
                <br />
                <input
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br />

                <label>Password</label>
                <br />
                <input
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                />
                <br /><br />

                <button type="submit">Login</button>
                <br /><br />
                <a href="/">Forgot Password?</a>
                <br /><br />

                <DisplayContext.Provider value={{ type, message }}>
                    <AuthMessage />
                </DisplayContext.Provider>
            </form>
        </div>
    );
}

export default LoginForm;
