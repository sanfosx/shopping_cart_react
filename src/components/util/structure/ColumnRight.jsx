import React from 'react'
import styled from 'styled-components'
import Social from '../Social'

const ColumnRight = ({ children }) => {
    return (
        <ContentColumnRight className="col-md-6 mx-auto col-lg-6">
            <div className="d-flex flex-col  card mb-1 px-1 py-1 text-center align-items-center bg-color">
                <HomeContent>
                    {children}
                </HomeContent>
            </div>
            <Social/>
        </ContentColumnRight>
    )
}

export default ColumnRight

const ContentColumnRight = styled.div`
 
    border:none;
    align-content:center;
    justify-content:center;
    .bg-color {
        background-color:transparent;
        border:none;
    }
    
   .scrollb{
    overflow: auto;
    &::-webkit-scrollbar{
        width: 5px;
        margin: 1px;
    }
    &::-webkit-scrollbar-thumb{
        background: #fc4b08;
        margin:1px;
    }
   }
 

`

const HomeContent = styled.div`
    background-color:transparent;
    border:none;
    align-content:center;
    justify-content:center;
   
    
   .scrollb{
    overflow: auto;
    &::-webkit-scrollbar{
        width: 5px;
        margin: 1px;
    }
    &::-webkit-scrollbar-thumb{
        background: #fc4b08;
        margin:1px;
    }
   }

    .column-left {
      display:flex;
      flex-direction:column;
      align-items:center;
      align-self:center;
      justify-self:center;
      max-height:80vh;
    }

    .color-black{
       background-color:black;
       box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    }

    h1{
        color:white;
    }
    &:hover{
        p{
            color:white;
        }
        h1{
            color:#fc4b08;
        }
    }
`;
