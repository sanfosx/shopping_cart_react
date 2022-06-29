import React from 'react'
import styled from 'styled-components'

const ContentMain = ({ children }) => {
    
    return (
        <Content className="container-fluid bg-dark btn content-home">
            <div className="row  g-lg-6 d-flex flex-wrap justify-content-center align-items-center scrollb">
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
`