import React, { useContext } from 'react';
import { AuthContext } from './LoginForm';
import DisplayStatus from './DisplayStatus'; // Import the DisplayStatus component

function AuthMessage() {
    const { message, messageType } = useContext(AuthContext);

    return (
        <div>
            {/* Display message if it's available */}
            {message && (
                <DisplayStatus 
                    type={messageType} 
                    message={message} 
                />
            )}
        </div>
    );
}

export default AuthMessage;
