import './Button.css';
import { useState } from 'react';

function Button({ text, onClick, type = 'main', size = 'medium' }){


    return (
        <button 
            className={`btn ${type} ${size}`}
            onClick={onClick}
        > 
            {text}
        </button>
    );

}


export default Button;