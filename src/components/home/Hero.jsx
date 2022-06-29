import { useNavigate } from 'react-router-dom'
import Inicio from '../util/Inicio'
import Social from '../util/Social'
import UserIcon from '../util/UserIcon'
import { React, useState } from 'react'

const Hero = ({ login = false, anchoIcon = '100px', altoIcon = '100px' }) => {
    const navigate = useNavigate()
    const USER = useState( localStorage.getItem("USER") ? JSON.parse(localStorage.getItem("USER")): null )
    console.log(USER);

    return (
        <div className='column-left scrollb' >
            <Inicio ancho={anchoIcon} alto={altoIcon} />
            <h1 className='text-center display-3 fw-bold'>Resto Bar App</h1>
           
            {!USER[0]
                ?
                <>
                 <p className="lead mx-2 ">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                {!login
                    ?
                    <button type="button" className="btn btn-primary btn-lg color-black mt-4" onClick={() => navigate('/login')}>Iniciar Sesion</button>
                    :
                    <Social/>
                }
                </>
                :
                 <div>
                    <h1>Hi, {USER[0].name}</h1>
                    <UserIcon/>
                </div>    
            }
        </div>
    )
}
export default Hero