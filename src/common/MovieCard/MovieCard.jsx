
import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import './MovieCard.css';

export const MovieCard = ({img, title, description}) => {

  return (
    <>
    <Card className='tarjeta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={
        
        img
        
        
        ? img
        : "No hay"} />
      <Card.Body className='bodyCard'>
        <Card.Title className='titulo'>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  </>
  )
}