import { useSelector } from "react-redux"
import { movieData } from "../detailSlice"
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { URL_images } from "../../services/apiCalls";

import './Detail.css'

export const Detail = () => {

    const reduxMovieData = useSelector(movieData);

    return(
        <>
            <Container fluid xs={10} md={4} xl={3}/>
            <Row className="contenedor" xs={10} md={4} xl={3}>
                <Col className="imageContainer">
                    <img className="imageDetails" src={URL_images+reduxMovieData.poster_path} alt={reduxMovieData.original_title}/>
                </Col>
                <Col className="nota">
                    {reduxMovieData.vote_average}⭐
                </Col>
                <Col className="detailsContainer">
                    <p className="title">{reduxMovieData.original_title}</p>
                    <p>{reduxMovieData.overview}</p>
                </Col>
            </Row>
            <Container/>
        </>
    )
}