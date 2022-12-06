import React from "react";
import '../App.css'
import {Button} from "./button";
import './aboutus.css'
import Video from '../data/placeholder.mov'

function AboutUs() {
    return (
        <div className='about-us-container'>
            <section className='text'>
                <h1>Our Mission</h1>
                <p>We want to incorporate an elevated vocabulary into your everyday life</p>
            </section>
            <section className='video'>
                <video src={Video} controls/>
            </section>
            <section className='about-us-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    link='free-trial'
                >
                    Free Trial
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    link='sign-up'
                >
                    Sign Up
                </Button>
            </section>
        </div>
    )
}

export default AboutUs;