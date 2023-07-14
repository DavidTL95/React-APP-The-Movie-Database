
import React from 'react'
import './Header.css'
import { Button, Container, Form } from 'react-bootstrap'

const Header = () => {
  return (
    <Container fluid className='contenedorHeader' xs={12} md={12} xl={12}>
        <div className='contenedorLogo'>
            <img className='logo' src="../../../img/MovieTown.png" alt="Logo" srcset="" />
        </div>

        <div className='contenedorBotones'>
          <Button variant="dark">Inicio</Button>
          <Button variant="dark">Top 20</Button>
        </div>

        <div className='contenedorBuscador'>
        <Form.Control type="text" placeholder="Normal text" />
        </div>
    </Container>
  )
}

export default Header