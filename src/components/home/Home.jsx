import React from 'react'
import styled from 'styled-components'
import Menu from './Menu';
import Hero from './Hero';
import ContentMain from '../util/structure/ContentMain';
import ColumnLeft from '../util/structure/ColumnLeft';
import ColumnRight from '../util/structure/ColumnRight';


const Home = () => {

  /*const USER = JSON.parse(localStorage.getItem("USER"));
  let showUser = false;*/

  return (
    <ContentHome>
      <ContentMain>
        <ColumnLeft >
          <Hero />
        </ColumnLeft>
        <ColumnRight>
          <Menu />
        </ColumnRight>
      </ContentMain>
    </ContentHome>
  )
}

export default Home

const ContentHome = styled.div`
  


`



