import { useDispatch, useSelector } from "react-redux"
import { movieData } from "../detailSlice"
import { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Button } from "bootstrap";
import { MovieCard } from "../../common/MovieCard/MovieCard";
import { useParams } from "react-router-dom";
import { URL_images, bringMovieByID } from "../../services/apiCalls";


export const Detail = () => {
    
    const reduxMovieData = useSelector(movieData);

    useEffect(() => {
        console.log(`kdsnfkjdbkfbsdjk${reduxMovieData}`)
    }, [])

    return(
        <>

        </>
    )
}