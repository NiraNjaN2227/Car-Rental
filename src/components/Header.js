import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/linkedIn.png'
import twitter from '../assets/twitter.png'
import call from '../assets/call.png'
import email from '../assets/email.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='social-icon'>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={linkedIn} alt="linkedIn" />
                <img src={twitter} alt="twitter" />
            </div>

            <div className='contact-info'>
                <img src={call} alt="Call" />
                <span>Call us: (+91) 709 6098 989</span>
                <img src={email} alt="email" />
                <span>Mail us: vatsprajapati20@gmail.com</span>
            </div>
        </div>
    )
}

export default Header;