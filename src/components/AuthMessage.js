import React, { useContext } from 'react';
import { DisplayContext } from './LoginForm';
import DisplayStatus from './DisplayStatus';

function AuthMessage() {
    const { type, message } = useContext(DisplayContext);

    return (
        <div>
            <DisplayStatus type={type} message={message} />
        </div>
    );
}

export default AuthMessage;
