import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { GiDrinkMe, GiWrappedSweet } from 'react-icons/gi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ButtonsMenu from '../ButtonsMenu'
import VerticalLine from '../VerticalLine'

const VerticalMenu = () => {

    const navigate = useNavigate()

    return (

        <div className="d-flex align-items-center justify-content-center">
            <div className="mx-3">
                <div className='mb-2' onClick={() => navigate('/prod')}>
                    <ButtonsMenu
                        ancho={'80px'}
                        alto={'80px'}
                        title={<h5 className='col-white'>Promos</h5>}
                        colorIcon={'black'}
                        bgColor={'#fc4b08'}
                        icon={<MdOutlineLocalOffer />} />
                </div>
                <div className='mb-2' onClick={() => navigate('/prod')}>
                    <ButtonsMenu
                        ancho={'80px'}
                        alto={'80px'}
                        title={<h6 className='col-white'>Comidas</h6>}
                        colorIcon={'#fc4b08'}
                        bgColor={''}
                        icon={<FaHamburger />} />
                </div>

                <div className='mb-2' onClick={() => navigate('/prod')}>
                    <ButtonsMenu
                        ancho={'80px'}
                        alto={'80px'}
                        title={<h6 className='col-white'>Bebidas</h6>}
                        colorIcon={'#fc4b08'}
                        bgColor={''}
                        icon={<GiDrinkMe />} />
                </div>

                <div className='mb-2' onClick={() => navigate('/prod')}>
                    <ButtonsMenu
                        ancho={'80px'}
                        alto={'80px'}
                        title={<h6 className='col-white'>Postres</h6>}
                        colorIcon={'#fc4b08'}
                        bgColor={''}
                        icon={<GiWrappedSweet />} />
                </div>
            </div>
            <VerticalLine />
        </div>
    )
}
export default VerticalMenu