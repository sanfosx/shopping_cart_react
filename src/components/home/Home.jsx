import React from 'react'
import styled from 'styled-components'
import Menu from './Menu';
import Hero from './Hero';
import ContentMain from '../util/structure/ContentMain';
import ColumnLeft from '../util/structure/ColumnLeft';
import ColumnRight from '../util/structure/ColumnRight';
import Footer from '../home/Footer'
import Social from '../util/Social';

const Home = () => {
  /*const USER = JSON.parse(localStorage.getItem("USER"));
  let showUser = false;*/

  return (
    <ContentHome>
      <ContentMain>
        <ColumnLeft >
          <Hero anchoIcon={'200px'} altoIcon={'200px'} />
        </ColumnLeft>
        <ColumnRight>
          <Menu />
        </ColumnRight >
        <Social/>
        <Footer />
      </ContentMain>
    </ContentHome>
  )
}
export default Home

const ContentHome = styled.div`
  
`



