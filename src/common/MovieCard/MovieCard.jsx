
import React from 'react'
import { Card } from 'react-bootstrap'
import './MovieCard.css';

//Creación de la card básica de películas con imagen y título.

export const MovieCard = ({img, title}) => {

  return (
    <>
    <Card className='tarjeta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className='bodyCard'>
        <Card.Title className='titulo'>{title}</Card.Title>
      </Card.Body>
    </Card>
  </>
  )
}