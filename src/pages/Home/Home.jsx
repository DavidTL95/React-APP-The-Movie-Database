
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Card, Button, Col, Container, Row, Form } from 'react-bootstrap'
import { URL_images, bringMovies, bringOneMovie } from '../../services/apiCalls';
import { MovieCard } from '../../common/MovieCard/MovieCard';
import { useDebounce } from 'use-debounce';
import { useSelector } from 'react-redux';
import { searchData } from '../searchSlice';

const Home = () => { 

  const searchReduxData = useSelector(searchData);

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [debounceSearch] = useDebounce(search, 500);

  useEffect(() => {
    // console.log(`Las peliculas estan aqui;${searchReduxData}`)
    if(searchReduxData.findings.length === 0){
      bringMovies()
      .then(
        res => {
          setMovies(res)
        }
      )
      .catch(error => console.log(error));
    }
  }, [searchReduxData])

  // useEffect(() => {
  //   if(debounceSearch){
  //     bringOneMovie(debounceSearch)
  //     .then((res) => setMovies(res));
  //   }else{
  //     bringMovies()
  //     .then((res) => setMovies(res));
  //   }
  // }, [debounceSearch]);

  // const inputHandler = ({ target }) => {
  //   const { value } = target;
  //   setSearch(value);
  // }

  return (
    <Container fluid className='contenedorHome'>
        <Row className="contenedorTarjetas">
          {searchReduxData.findings.length > 0 ? (
            <>
              {searchReduxData.findings.map((movie) => {
                return (
                  <Col className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                    <MovieCard img={URL_images+movie.poster_path} title={movie.original_title} description={movie.overview}></MovieCard>
                  </Col>
                )
              })}
            </>
          ):(
            <>
              {movies?.map((movie) => {
                return(
                  <Col className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                    <MovieCard img={URL_images+movie.poster_path} title={movie.original_title} description={movie.overview}></MovieCard>
                  </Col>
                )
              })}
            </>
          )}

          {/* {movies?.map((movie) => {
            return(
              <Col className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                <MovieCard img={URL_images+movie.poster_path} title={movie.original_title} description={movie.overview}></MovieCard>
            </Col>
            );
          })} */}
        </Row>
    </Container>
  )
}

export default Home