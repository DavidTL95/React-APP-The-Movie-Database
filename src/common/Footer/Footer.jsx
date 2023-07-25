
import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

//Contenedor de enlaces a las redes sociales.

export const Footer = () => {
  return (
    <Container fluid className='contenedorFooter' xs={12} md={12} xl={12}>
        <div className='contenedorRRSS'>
            <a href="" target='_blank'><img src="../../../public/img/RRSS/facebook.png" alt="facebook"/></a>
            <a href="" target='_blank'><img src="../../../public/img/RRSS/instagram.png" alt="instagram"/></a>
            <a href="" target='_blank'><img src="../../../public/img/RRSS/tiktok.png" alt="tiktok"/></a>
            <a href="" target='_blank'><img src="../../../public/img/RRSS/youtube.png" alt="youtube"/></a>
            <a href="" target='_blank'><img src="../../../public/img/RRSS/twitter.png" alt="twitter"/></a>
        </div>
    </Container>
  )
}