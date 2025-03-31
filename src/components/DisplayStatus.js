import React, { useEffect } from 'react';

function DisplayStatus({ type, message }) {
    useEffect(() => {
        if (type === 'success') {
            setTimeout(() => {
                window.location.href = '/courses';
            }, 2000);
        }
    }, [type]);

    return (
        <div className={`status ${type}`}>
            <p>{message}</p>
        </div>
    );
}

export default DisplayStatus;
