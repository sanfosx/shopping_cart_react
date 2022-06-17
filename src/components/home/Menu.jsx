import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonsMenu from '../util/ButtonsMenu'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { GiDrinkMe, GiWrappedSweet } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa';
import styled from 'styled-components'

const Menu = () => {
    const navigate = useNavigate()

    return (
        <ContentMenu className='d-flex flex-col  card mb-3 px-2 py-3 text-center align-items-center'>
            <h1 className='pt-1 col-white'>Nuestro Menu</h1>
            <div className="d-flex  align-items-strech mt-4 ">
                <div onClick={() => navigate('/product')}>
                    <ButtonsMenu
                        ancho={'150px'}
                        alto={'150px'}
                        title={<h2 className='col-white'>Promos</h2>}
                        colorIcon={'black'}
                        bgColor={'#fc4b08'}
                        icon={<MdOutlineLocalOffer />} />
                </div>

                <div className='m-4'></div>
                <ButtonsMenu
                    ancho={'150px'}
                    alto={'150px'}
                    title={<h2 className='col-white'>Comidas</h2>}
                    colorIcon={'#fc4b08'}
                    bgColor={''}
                    icon={<FaHamburger />} />

            </div>
            <div className="d-flex justify-content-center align-items-strech mt-4  ">
                <ButtonsMenu
                    ancho={'150px'}
                    alto={'150px'}
                    title={<h2 className='col-white'>Bebidas</h2>}
                    colorIcon={'#fc4b08'}
                    bgColor={''}
                    icon={<GiDrinkMe />} />
                <div className='m-4'></div>
                <ButtonsMenu
                    ancho={'150px'}
                    alto={'150px'}
                    title={<h2 className='col-white'>Postres</h2>}
                    colorIcon={'#fc4b08'}
                    bgColor={''}
                    icon={<GiWrappedSweet
                    />} />
            </div>
        </ContentMenu>
    )
}

export default Menu

const ContentMenu = styled.div`

background-color:transparent;
border:none;
`