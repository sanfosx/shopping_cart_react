import { React, useContext } from 'react';
import { AppContext } from '../../contexts/CartContext';
import Data from '../../Data';
import ItemProduct from './ItemProduct';

const Products = () => {
  const [state] = useContext(AppContext);

  console.log('Carrito', state.length, state)

  return (
    <div>
      <h1>Productos</h1>
      {Data.map((dato, idx) => (
        <div key={idx}>
          <ItemProduct data={dato} />
        </div>
      ))}

      {state.map((dato, idx) => (
        <div className="card m-1 " key={idx}>
          {dato.name}
        </div>
      ))}
    </div>
  )
}

export default Products