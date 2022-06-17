import { React, useContext } from 'react';
import ItemShoppingCart from './ItemShoppingCart';
import { AppContext } from '../../contexts/CartContext';

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
        <>
            {state.length > 0 &&
                <div>
                    <h1>Carrito</h1>
                    <h3>Cantidad de productos: {calcCant()}</h3>
                    <h3>Total a Pagar: $ {calcTotal()}</h3>
                    <button>Seguir Comprando</button>

                    <button onClick={() => clearCart()}>Vaciar Carrito</button> <button>Finalizar compra</button>
                    {state.map((dato, idx) => (
                        <div key={idx}>
                            <ItemShoppingCart data={dato} />
                        </div>
                    ))}

                </div>
            }

            {state.length === 0 &&
                <h1>Carrito Vacio</h1>

            }
        </>
    )
}

export default ShoppingCart;