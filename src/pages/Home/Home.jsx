
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card, Button, Col, Container, Row, Form } from 'react-bootstrap'
import { URL_images, bringMovies, bringOneMovie } from '../../services/apiCalls';
import { MovieCard } from '../../common/MovieCard/MovieCard';
import { useDebounce } from 'use-debounce';

const Home = () => { 

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 1000);

  // useEffect(() => {
  //   bringMovies()
  //   .then(
  //     res => {
  //       setMovies(res)
  //     }
  //   )
  //   .catch(error => console.log(error));
  // }, [])

  useEffect(() => {
    if(debounceSearch){
      bringOneMovie(debounceSearch)
      .then((res) => setMovies(res));
    }else{
      bringMovies()
      .then((res) => setMovies(res));
    }
  }, [debounceSearch]);

  const inputHandler = ({ target }) => {
    const { value } = target;
    setSearch(value);
  }

  return (
    <Container fluid className='contenedorHome'>
      <div className='contenedorBuscador'>
              <Form.Control className='search' name="title" type="text" placeholder="Search a movie..." onChange={inputHandler}/>
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