import  { React, useContext, useState } from 'react'
import { AppContext } from '../../contexts/CartContext'

const ItemShoppingCart = (props) => {
  const [state, setState] = useContext(AppContext)
  const [cant, setCant] = useState(props.data.cant)

  console.log('Carrito', state.length, state)
  const increment = (item) => {
    setCant(cant + 1)
    updateCart(item)
  }

  const decrement = (item) => {
    if (cant > 1) {
      setCant(cant - 1)
      updateCart(item, -1)
    }
  }

  const updateCart = (item, op) => {

    const idx = state.findIndex((e) => e.id === item.id)
    const aux = state
    if (op === -1) {
      aux[idx].cant = cant - 1
    } else {
      aux[idx].cant = cant + 1
    }
    aux[idx].tot = aux[idx].cant * aux[idx].price
    setState([...aux])
    localStorage.setItem('cart', JSON.stringify([...aux]))
  }

  const deleteItemCart = (id) => {
    const idx = state.findIndex(e => (e.id === id))
    const aux = state
    aux.splice(idx, 1)
    setState([...aux])
    localStorage.setItem('cart', JSON.stringify([...aux]))
    console.log('Carrito', state.length, state)
  }

  
  return (
    <div>
      <h1>{props.data.name}</h1>
      <img src={props.data.img} alt="algo" />
      <p>Precio x unidad: $ {props.data.price}</p>
      <p>Cantidad:</p>
      <button onClick={() => decrement(props.data)}>-</button><strong>  {cant}  </strong>  <button onClick={() => increment(props.data)}>+</button>
      <br />
      <h2>Total: $ {props.data.tot} </h2>
      <button onClick={() => deleteItemCart(props.data.id)}>Borrar</button>
      
    </div>
  )
}

export default ItemShoppingCart