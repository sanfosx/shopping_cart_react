import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BsCart3, BsFileEarmarkPersonFill, BsFillFileEarmarkTextFill, BsFillSuitHeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'

const UserIcon = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    return (
        <ContentUserIcon className="social  w-100">
            <i className='fa mx-1' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom" onClick={() => navigate('/cart')}><BsFileEarmarkPersonFill /></i>
            <i className='fa mx-1' onClick={() => navigate('/cart')}><BsCart3 /></i>
            <i className='fa mx-1' onClick={() => navigate('/cart')}><BsFillSuitHeartFill /></i>
            <i className='fa mx-1' onClick={() => navigate('/cart')}><BsFillFileEarmarkTextFill /></i>
            <i className='fa mx-1' onClick={() => logout()}><AiOutlinePoweroff /></i>

        </ContentUserIcon>
    )
}

export default UserIcon

const ContentUserIcon = styled.div`
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
      color:black;
      text-align: center;
      text-decoration: none;
      margin: 1px 1px;
      
      &:hover{
          color:#fc4b08;
      }
   }
`