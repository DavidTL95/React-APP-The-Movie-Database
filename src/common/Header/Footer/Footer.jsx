
import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='contenedorFooter'>
        <div className='contenedorRRSS'>
            <a href="" target='_blank'><img src="../../../img/RRSS/facebook.png" alt="facebook" srcset="" /></a>
            <a href="" target='_blank'><img src="../../../img/RRSS/instagram.png" alt="instagram" srcset="" /></a>
            <a href="" target='_blank'><img src="../../../img/RRSS/tiktok.png" alt="tiktok" srcset="" /></a>
            <a href="" target='_blank'><img src="../../../img/RRSS/youtube.png" alt="youtube" srcset="" /></a>
            <a href="" target='_blank'><img src="../../../img/RRSS/twitter.png" alt="twitter" srcset="" /></a>
        </div>
    </Container>
  )
}

export default Footer