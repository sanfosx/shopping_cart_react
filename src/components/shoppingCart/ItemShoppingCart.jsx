import { React, useContext, useState } from 'react'
import styled from 'styled-components'
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
    <Content className='btn bg-primary d-flex flex-row flex-wrap px-4 py-3 m-3'>
      <div className="d-flex flex-row flex-wrap">
        <div className="content-img d-flex align-items-center justify-content-center me-3">
          <img src={props.data.img} alt="algo" />
        </div>
        <div className="content-data d-flex flex-column align-items-start">
          <h2>{props.data.name}</h2>
          <p>Precio x unidad: $ {props.data.price}</p>
          <div className="d-flex flex-row align-items-center">
            <p className='align-self-end me-2'>Cantidad:</p>
            <button onClick={() => decrement(props.data)} className='me-2'>-</button>
            <h3><strong>  {cant}  </strong></h3>
            <button onClick={() => increment(props.data)} className='ms-2'>+</button>
          </div>
          <h2 className='mt-2'>Total: $ {props.data.tot} </h2>
        </div>
      </div>
    </Content>
  )
}
export default ItemShoppingCart

const Content = styled.div`
  color: white;
  img{
    width: 100px;
    height: 100px;
    border-color: white
  }
  &:hover{
    color: white;
  }
`