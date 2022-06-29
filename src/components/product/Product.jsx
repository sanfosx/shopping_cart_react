import { React, useContext } from 'react';
import { AppContext } from '../../contexts/CartContext';
import Data from '../../Data';
import Menu from '../home/Menu';
import ColumnLeft from '../util/structure/ColumnLeft';
import ColumnRight from '../util/structure/ColumnRight';
import ContentMain from '../util/structure/ContentMain';
import ItemProduct from './ItemProduct';
import styled from 'styled-components';
import IconMenu from '../util/menu/IconMenu';

const Products = () => {
  const [state] = useContext(AppContext);

  console.log('Carrito', state.length, state)

  return (

    <ContentMain>

     <IconMenu/>

    </ContentMain>
  )
}

export default Products


const ContentProduct = styled.div`
height:85vh;
`