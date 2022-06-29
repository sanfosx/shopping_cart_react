import { React, useContext } from 'react';
import ItemShoppingCart from './ItemShoppingCart';
import { AppContext } from '../../contexts/CartContext';
import ContentMain from '../util/structure/ContentMain';
import ColumnLeft from '../util/structure/ColumnLeft';
import ColumnRight from '../util/structure/ColumnRight';
import NavBar from '../home/NavBar';
import Social from '../util/Social';
import Footer from '../home/Footer';
import { BsCart3 } from 'react-icons/bs';
import styled from 'styled-components';
import ButtonsMenu from '../util/ButtonsMenu';
import VerticalLine from '../util/VerticalLine';

const ShoppingCart = () => {
    const [state, setState] = useContext(AppContext);

    const clearCart = () => {
        setState([])
        localStorage.setItem('cart', JSON.stringify([]))
        console.log('ShoppingCart', state.length, state)
    }

    const calcTotal = () => {
        let tot = 0
        state.forEach(e => {
            tot = tot + e.tot
        });
        return tot
    }

    const calcCant = () => {
        let totCant = 0
        state.forEach(e => {
            totCant = totCant + e.cant
        });
        return totCant
    }

    return (
        <ContentMain>
            <NavBar></NavBar>
            {state.length
                ?
                <>
                    <ColumnLeft>
                        <ButtonsMenu
                            ancho={'150px'}
                            alto={'150px'}
                           
                            colorIcon={'black'}
                            bgColor={'#fc4b08'}
                            icon={<BsCart3/>}/>
               
                        
                        <h3 className='mt-3 text-white'>Cantidad de productos: {calcCant()}</h3>
                        <h3 className='text-white'>Total a Pagar: $ {calcTotal()}</h3>
                        <button className='btn btn-danger m-1 ' onClick={() => clearCart()}>Vaciar Carrito</button> 
                        <button className='btn btn-primary btn-purchase m-1 '>Finalizar compra</button>
                        <p></p>
                        
                      
                    </ColumnLeft>
                    
                    <ColumnRight>
                        <div className='d-flex flex-wrap justify-content-center align-items-center scrollb'>
                            {state.map((dato, idx) => (
                                <div key={idx}>
                                    <ItemShoppingCart data={dato} />
                                </div>
                            ))}
                        </div>

                    </ColumnRight>
                </>
                :
                <CartEmpty className='btn bg-white'>
                    <h1>Carrito Vacio</h1>
                    <i className='fa mx-1' ><BsCart3 /></i>
                </CartEmpty>
            }
            <Social />
            <Footer />
        </ContentMain>
    )
}
export default ShoppingCart;

const Content = styled.div`

`
const CartEmpty = styled.div`
    .fa{
        font-size:200px;
    }
`