import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/CartContext'
import ContentMain from '../util/structure/ContentMain'
import ItemProduct from './ItemProduct'
import Data from '../../Data'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Social from '../util/Social'
import Footer from '../home/Footer'
import NavBar from '../home/NavBar'

const Prod = (props) => {
    const [state] = useContext(AppContext);
    const navigate = useNavigate()

    return (
        <ContentMain>
            <NavBar/>
                <ContentProduct className=' btn bg-white'>
                <h1>Promos</h1>
                    <div className='d-flex flex-wrap justify-content-center align-items-center scrollb'>
                        {Data.map((dato, idx) => (
                            <div className='m-1 p-1' key={idx}>
                                <ItemProduct data={dato} />
                            </div>
                        ))}
                    </div>
                </ContentProduct>
            <Social />
            <Footer/>
        </ContentMain>
    )
}
export default Prod

const ContentProduct = styled.div`
    .scrollb{
        height:60vh;
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