import React from "react";
import {SubmitButton} from "./button";
import './footer.css'
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe to get notified about the latest updates
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form action={(props.backend) + 'subscribe.php'} method='post'>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <SubmitButton buttonStyle='btn--outline' buttonSize='btn--medium' name='Subscribe'>
                        </SubmitButton>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Help</h2>
                        <Link className='footer-link' to='/contact-us'>Contact Us</Link>
                        <Link className='footer-link' to='/forgot-password'>Forgot Password?</Link>
                        <Link className='footer-link' to='/terms-of-service'>Terms of Service</Link>
                    </div>
                </div>
            </div>

            <small className='website-rights'>Vocab SAT © 2022</small>
        </div>
    )
}

export default Footer;