import React from 'react'
import styled from 'styled-components'
import VerticalLine from '../VerticalLine'

const ColumnLeft = ({ children }) => {
    return (
        <ContentColumnLeft className=" col-lg-6 d-flex text-center text-lg-center align-items-center justify-content-center ">
            <div className="row  g-lg-6 py-2 m-2 ">
                <ContentLeft>
                    {children}
                </ContentLeft>
            </div>
        </ContentColumnLeft>
    )
}
export default ColumnLeft

const ContentColumnLeft = styled.div`
 
`
const ContentLeft = styled.div`
    background-color:transparent;
    border:none;
    align-content:center;
    justify-content:center;
    width:100%;

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
      max-height:90vh;

      @media (min-width: 290px) {
        max-height:100vh;
      }
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

    .btn-purchase{
        background-color:black;
        box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    }
`;
