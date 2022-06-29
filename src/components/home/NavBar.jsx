import { React, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { AppContext } from '../../contexts/CartContext';
import Inicio from '../util/Inicio';

const NavBar = () => {
    const [state, setState] = useContext(AppContext);
    const navigate = useNavigate()
    const { logout } = useAuth()
    const USER = useState( localStorage.getItem("USER") ? JSON.parse(localStorage.getItem("USER")): ('')) 
   

    const calCant = () => {

        let totCant = 0
        state.forEach(e => {
            totCant = totCant + e.cant
        });
        return totCant
    }
    
    return (
        <Content>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-1 border-0">
                    <Container fluid className=''>
                        <Navbar.Brand href="/"><Inicio /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3 drop">
                                    <Nav.Link href="/prod">Promos</Nav.Link>
                                    <Nav.Link href="/prod">Comidas</Nav.Link>
                                    <Nav.Link href="/prod">Bebidas</Nav.Link>
                                    <Nav.Link href="/prod">Postres</Nav.Link>
                                </Nav>
                                {USER[0].name &&
                                <div className="d-flex">
                                    <NavDropdown
                                        title={USER[0].name}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`} className='drop'>
                                        <NavDropdown.Item href="#action3">Mis Datos</NavDropdown.Item>
                                        <NavDropdown.Item href="/cart">
                                            Carrito
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Favoritos
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Compras
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="" onClick={() => logout()}>
                                            Cerrar Sesion
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    {calCant() > 0 &&
                                        <Button className="position-relative btn-cart">
                                            <i className='fa mx-1' onClick={() => navigate('/cart')}><BsCart3 /></i>
                                            <span className="position-absolute top-50 start-90 translate-middle p-2 bg-danger border border-light rounded-circle badge">
                                                {calCant()}<span className="visually-hidden">{calCant()}</span>
                                            </span>
                                        </Button>
                                    }
                                    
                                </div>
                                    }
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </Content>
    );
}
export default NavBar;

const Content = styled.div`   
    .drop{
        font-size:30px;
    }
    .badge{
        font-size:9px;
    }
    .btn-cart{
        background-color:transparent;
        border:none;
    }
    .fa{
        font-size: 35px;
    }
`