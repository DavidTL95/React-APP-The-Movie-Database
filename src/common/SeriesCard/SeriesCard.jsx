import React from 'react'
import './SeriesCard.css';
import { Col, Container, Row } from 'react-bootstrap';
import { URL_images } from '../../services/apiCalls';


export const SeriesCard = ({img, title, overview, vote}) => {

  return (
    <>
        <Container fluid xs={10} md={4} xl={3}/>
            <Row className="contenedor" xs={10} md={4} xl={3}>
                <Col className="imageContainer">
                    <img className="imageDetails" src={URL_images+img} alt={title}/>
                </Col>
                <Col className="nota">
                    {vote}⭐
                </Col>
                <Col className="detailsContainer">
                    <p className="title">{title}</p>
                    <p>{overview}</p>
                </Col>
            </Row>
        <Container/>
    </>
  )
}