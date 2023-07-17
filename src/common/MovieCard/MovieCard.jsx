
import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { URL_images } from '../../services/apiCalls';

export const MovieCard = ({img, title, description}) => {

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  </>
  )
}