
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import { bringMovies } from '../../services/apiCalls';
import MovieCard from './MovieCard/MovieCard';

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
    <>
      Home
    </>
  )
}

export default Home