import React from 'react'
import styled from 'styled-components'

const VerticalLine = () => {

  return (
    <Content/>
  )
}
export default VerticalLine

const Content = styled.div`
  border-left:1px solid white;
  color:white;
  height:80%;
  margin-top: 50px;
  align-self:start;
  @media (max-width: 990px) {
    
  }
`