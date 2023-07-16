
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { URL_images, bringMovies } from '../../services/apiCalls';

const Home = () => { 

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    bringMovies()
    .then(
      res => {
        setMovies(res)
      }
    )
    .catch(error => console.log(error));
  }, [])

  return (
    <Container fluid className='contenedorHome'>
        <Row className="contenedorTarjetas">
          {movies?.map((movie) => {
            return(
              <Col className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                <Card className='tarjeta' style={{width: "18rem"}}>
                  <Card.Img className="img" variant="top" src={`${URL_images}${movie.poster_path}`}/>
                  <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button variant="primary"> Detail </Button>
                  </Card.Body>
                </Card>
            </Col>
            );
          })}
        </Row>
    </Container>
  )
}

export default Home