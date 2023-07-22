
import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addMovie } from '../../pages/detailSlice';

export const MovieCard = ({img, title, description}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
    <Card className='tarjeta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={
        
        img
        
        ? img
        : "No hay"} />
      <Card.Body className='bodyCard'>
        <Card.Title className='titulo'>{title}</Card.Title>
      </Card.Body>
    </Card>
  </>
  )
}