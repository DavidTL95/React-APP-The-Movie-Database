
import React from 'react'
import { Card, Button } from 'react-bootstrap'

const MovieCard = (id, img, title, description) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2+${img}`} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">Detalles</Button>
    </Card.Body>
  </Card>
  )
}

export default MovieCard