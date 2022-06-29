import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaSnapchat } from 'react-icons/fa';
import styled from 'styled-components';

const Social = () => {
    
    return (
        <ContentSocial className="social  w-100">
            <p className='col-white text-center'>Seguinos en </p>
            <div>
                <i className='fa'><FaFacebook /></i>
                <i className='fa'><FaTwitter /></i>
                <i className='fa'><FaInstagram /></i>
                <i className='fa'><FaLinkedin /></i>
                <i className='fa'><FaYoutube /></i>
                <i className='fa'><FaSnapchat /></i>
            </div>
        </ContentSocial>
    )
}
export default Social

const ContentSocial = styled.div`
    margin-bottom: 5px;
    .social {
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .fa{
      padding: 2px 20px;
      font-size: 35px;
      width: 40px;
      color:white;
      text-align: center;
      text-decoration: none;
      margin: 1px 1px;
      &:hover{
          color:#fc4b08;
      }
   }
   p{
    margin:0;
   }
`