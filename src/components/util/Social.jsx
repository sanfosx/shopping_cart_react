import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaSnapchat } from 'react-icons/fa';

const Social = () => {
    return (
        <div className="social align-self-center w-100">
            <p className='col-white text-center'>Seguinos en </p>
            <div>
                <i className='fa'><FaFacebook /></i>
                <i className='fa'><FaTwitter /></i>
                <i className='fa'><FaInstagram /></i>
                <i className='fa'><FaLinkedin /></i>
                <i className='fa'><FaYoutube /></i>
                <i className='fa'><FaSnapchat /></i>
            </div>
        </div>
    )
}

export default Social