import { React, useContext } from 'react';
import { AppContext } from '../../contexts/CartContext';
import Data from '../../Data';
import Menu from '../home/Menu';
import ColumnLeft from '../util/structure/ColumnLeft';
import ColumnRight from '../util/structure/ColumnRight';
import ContentMain from '../util/structure/ContentMain';
import ItemProduct from './ItemProduct';
import styled from 'styled-components';

const Products = () => {
  const [state] = useContext(AppContext);

  console.log('Carrito', state.length, state)

  return (

    <ContentMain>

      <ColumnLeft>
        <Menu/>
      </ColumnLeft>

      <ColumnRight >
      <h1>Productos</h1>
        <ContentProduct className='scrollb w-100'>
         
          {Data.map((dato, idx) => (
            <div className='w-100' key={idx}>
              <ItemProduct data={dato} />
            </div>
          ))}

          {state.map((dato, idx) => (
            <div className="card m-1 " key={idx}>
              {dato.name}
            </div>
          ))}
        </ContentProduct>
      </ColumnRight>

    </ContentMain>
  )
}

export default Products


const ContentProduct = styled.div`

height:70vh;



`