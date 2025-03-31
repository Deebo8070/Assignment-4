import React from 'react';
import './DisplayStatus.css'; // Import DisplayStatus styles

function DisplayStatus({ type, message }) {
    return (
        <div className={`status-message ${type}`}>
            {message}
        </div>
    );
}

export default DisplayStatus;
