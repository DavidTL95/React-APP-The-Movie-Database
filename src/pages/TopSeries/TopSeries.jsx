
import React, { useEffect, useState } from 'react'
import './TopSeries.css'
import { Col, Container, Row } from 'react-bootstrap'
import { URL_images, bringTopSeries } from '../../services/apiCalls';
import { MovieCard } from '../../common/MovieCard/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../searchSlice';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../detailSlice';

export const TopSeries = () => { 

  const searchReduxData = useSelector(searchData);

  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    // console.log(`Las peliculas estan aqui;${searchReduxData}`)
    if(searchReduxData.findings.length === 0){
      bringTopSeries()
      .then(
        res => {
          setMovies(res)
        }
      )
      .catch(error => console.log(error));
    }
  }, [searchReduxData])

  console.log(movies)

  const seeDetail = (item) => {
    dispatch(addMovie(item))
    navigate("/detailSeries")
  }

  return (
    <Container fluid className='contenedorHome'>
        <Row className="contenedorTarjetas">
          {searchReduxData.findings.length > 0 ? (
            <>
              {searchReduxData.findings.map((movie) => {
                return (
                  <Col onClick={() => seeDetail(movie)} className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                    <MovieCard img={URL_images+movie.poster_path} title={movie.original_title} description={movie.overview}></MovieCard>
                  </Col>
                )
              })}
            </>
          ):(
            <>
              {movies?.map((movie) => {
                return(
                  <Col onClick={() => seeDetail(movie)} className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                    <MovieCard img={URL_images+movie.poster_path} title={movie.original_title} description={movie.overview}></MovieCard>
                  </Col>
                )
              })}
            </>
          )}
        </Row>
    </Container>
  )
}