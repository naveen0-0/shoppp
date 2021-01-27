import React from 'react';
import spinnerimg from '../images/spinner.gif';

export const Spinner = () => {
    return (
        <div className="spinnercontainer">
            <img src={spinnerimg} alt="Spinner" className="spinner" />
        </div>
    )
}
