import { React, useContext, useState } from 'react'
import { AppContext } from '../../contexts/CartContext'
import styled from 'styled-components'

const ItemProduct = (props) => {
  const [state, setState] = useContext(AppContext)
  const [cant, setCant] = useState(1)
  
  const existInCart = (id) => {
    const idx = state.findIndex((e) => e.id === id)
    if (idx === -1) {
      return true
    } else return false
  }

  const [showButtons, setShowButtons] = useState(existInCart(props.data.id))

  const increment = () => {
    setCant(cant + 1)
  }
  const decrement = () => {
    if (cant > 1) {
      setCant(cant - 1)
    }
  }

  function addToCart(item) {
    console.log(state.length)
    item.cant = cant
    item.tot = cant * item.price
    setCant(1)
    setShowButtons(false)
    console.log('state', state)
    setState([...state, item]);
    localStorage.setItem('cart', JSON.stringify([...state, item]))
  }

  return (
    <Content className="btn btn-primary m-1 p-3  text-center">
      <img src={props.data.img} alt="algo" className="d-block mx-auto mb-4" width="72" height="57" />
      <h1>{props.data.name}</h1>
      <h2>Precio: $ {props.data.price}</h2>
      {showButtons &&
        <div className=' '>
          <p>Cantidad: </p><button onClick={() => decrement()}>-</button> {cant} <button onClick={() => increment()}>+</button>
          <br />
          <br />
          <button className='btn btn-info' onClick={() => addToCart(props.data)}>Agregar</button>
        </div>
      }
      {!showButtons &&
        <p>Agregado al carrito</p>
      }
    </Content>
  )
}
export default ItemProduct

const Content = styled.div`
  max-width:500px;
  display:grid;
`