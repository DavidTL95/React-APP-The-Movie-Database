import { useSelector } from "react-redux"
import { movieData } from "../detailSlice"
import { Container, Row, Col } from "react-bootstrap";
import { URL_images } from "../../services/apiCalls";

import './DetailSeries.css'

export const DetailSeries = () => {

    const reduxMovieData = useSelector(movieData);

    return(
        <>
            <Container fluid xs={10} md={4} xl={3}/>
            <Row className="contenedor" xs={10} md={4} xl={3}>
                <Col className="imageContainer">
                    <img className="imageDetails" src={URL_images+reduxMovieData.poster_path} alt={reduxMovieData.original_name}/>
                </Col>
                <Col className="nota">
                    {reduxMovieData.vote_average}⭐
                </Col>
                <Col className="detailsContainer">
                    <p className="title">{reduxMovieData.original_name}</p>
                    <p>{reduxMovieData.overview}</p>
                </Col>
            </Row>
            <Container/>
        </>
    )
}