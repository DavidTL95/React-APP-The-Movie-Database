
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card, Button, Col, Container, Row, Form } from 'react-bootstrap'
import { URL_images, bringMovies } from '../../services/apiCalls';
import { MovieCard } from '../../common/MovieCard/MovieCard';

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
      <div className='contenedorBuscador'>
              <Form.Control className='search' name="title" type="text" placeholder="Search a movie..." />
      </div>
        <Row className="contenedorTarjetas">
          {movies?.map((movie) => {
            return(
              <Col className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                <MovieCard img={URL_images+movie.poster_path} title={movie.original_title} description={movie.overview}></MovieCard>
            </Col>
            );
          })}
        </Row>
    </Container>
  )
}

export default Home