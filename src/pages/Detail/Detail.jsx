import { useDispatch, useSelector } from "react-redux"
import { movieData } from "../detailSlice"
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Button } from "bootstrap";
import { MovieCard } from "../../common/MovieCard/MovieCard";
import { useNavigate, useParams } from "react-router-dom";
import { URL_images, bringMovieByID } from "../../services/apiCalls";

import './Detail.css'

export const Detail = () => {
    
    const navigate = useNavigate();

    const reduxMovieData = useSelector(movieData);

    console.log('ksdnaldk')
    console.log(reduxMovieData)

    return(
        <>
            <Container fluid className="contenedor" xs={10} md={4} xl={3}/>
                <div className="detailContainer">
                    <img className="col imageDetails" src={URL_images+reduxMovieData.poster_path} alt={reduxMovieData.original_title}/>
                    <div className="col details">
                        <p className="title">
                            <strong>Title: </strong>{reduxMovieData.original_title}
                        </p>
                        <p>
                            <strong>Description: </strong>{reduxMovieData.overview}
                        </p>
                    </div>
                </div>
            <Container/>
        </>
    )
}