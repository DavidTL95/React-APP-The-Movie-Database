
import React from 'react'
import './Header.css'
import { Button, Container, Form } from 'react-bootstrap'

const Header = () => {
  return (
    <Container fluid className='contenedorHeader' xs={12} md={12} xl={12}>
        <div className='contenedorLogo'>
            <img className='logo' src="../../../img/MovieTown.png" alt="Logo" />
        </div>

        <div className='contenedorBotones'>

        </div>

        <div className='contenedorBuscador'>
          <Button variant="dark">Top 20</Button>
        </div>
    </Container>
  )
}

export default Header