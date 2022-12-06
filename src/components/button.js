import React from "react";
import './button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={(typeof link === 'string') ? link : '/'} className='btn-mobile'>
            <button
                className={'btn ' + checkButtonStyle + ' ' + checkButtonSize}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}

export const SubmitButton = ({buttonStyle, buttonSize, name}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={'btn ' + checkButtonStyle + ' ' + checkButtonSize}>
            <input
                type='submit'
                value=''
                className='btn-submit'

            />
            {name}
        </button>
    )
}