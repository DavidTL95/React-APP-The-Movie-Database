
import React, { useEffect, useState } from 'react'
import './HomeSeries.css'
import { Col, Container, Row } from 'react-bootstrap'
import { URL_images, bringSeries } from '../../services/apiCalls';
import { MovieCard } from '../../common/MovieCard/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../searchSlice';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../detailSlice';

export const HomeSeries = () => { 

  const searchReduxData = useSelector(searchData);

  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //LLamada a la API para que traiga las películas en caso de que no haya ninguna.

  useEffect(() => {

    if(searchReduxData.findings.length === 0){
      bringSeries()
      .then(
        res => {
          setMovies(res)
        }
      )
      .catch(error => console.log(error));
    }
  }, [searchReduxData])

  //Función para dar paso al detalle de la película seleccionada, guardando en REDUX los detalles de la película. Y navegando a la página de detalle.

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
                    <MovieCard img={URL_images+movie.poster_path} title={movie.original_name} description={movie.overview}></MovieCard>
                  </Col>
                )
              })}
            </>
          ):(
            <>
              {movies?.map((movie) => {
                return(
                  <Col onClick={() => seeDetail(movie)} className='colTarjetas' xs={10} md={4} xl={3} key={movie.id}>
                    <MovieCard img={URL_images+movie.poster_path} title={movie.original_name} description={movie.overview}></MovieCard>
                  </Col>
                )
              })}
            </>
          )}
        </Row>
    </Container>
  )
}