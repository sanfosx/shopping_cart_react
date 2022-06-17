import React from 'react'
import styled from 'styled-components'

const ContentMain = ({ children }) => {
    return (
        <Content className="container-fluid bg-dark btn content-home">
            <div className="row  g-lg-6  ">
                {children}
            </div>
        </Content>
    )
}

export default ContentMain

const Content = styled.div`
  background-color:black;
  align-items:center;
  justify-content:center;
  
 
 
  .social {
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:10px
  }
  .fa{
      padding: 20px;
      font-size: 30px;
      width: 50px;
      color:white;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
      &:hover{
          color:#fc4b08;
      }
   }

`