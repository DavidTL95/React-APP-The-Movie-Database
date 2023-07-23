import { useSelector } from "react-redux"
import { movieData } from "../detailSlice"

import './DetailSeries.css'
import { SeriesCard } from "../../common/SeriesCard/SeriesCard";

//Creación de la página dónde se mostrara la información en detalle de las series.

export const DetailSeries = () => {

    const reduxMovieData = useSelector(movieData);

    console.log(reduxMovieData)

    return(
        <>
            <SeriesCard img={reduxMovieData.poster_path} title={reduxMovieData.name} overview={reduxMovieData.overview} vote={reduxMovieData.vote_average} key={reduxMovieData.id}/>
        </>
    )
}