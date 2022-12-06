import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {Button} from "./button";
import './navbar.css'
import Logo from '../data/Logo.png'

function Navbar({handleLogin}) {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}>
                        <img
                            src={Logo}
                            alt='Logo'
                            width='65'
                            height='65'
                        />
                    </Link>
                    <div
                        className='menu-icon'
                        onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/home'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/pricing'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/free-trial'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Try It Out
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/log-in'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Sign Up/Log In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button
                        buttonStyle='btn--outline'
                        onClick={handleLogin}>SIGN UP/LOG IN</Button> }
                </div>
            </nav>
        </div>
    )
}

export default Navbar