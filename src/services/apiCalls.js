
import axios from "axios";

export const URL_images = "https://image.tmdb.org/t/p/original/";

// const nuevaURL='https://www.themoviedb.org/t/p/w300_and_h450_bestv2';

const apiKey = "210d6a5dd3f16419ce349c9f1b200d6d";

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

export const bringMovies = async() => {

    let {data} = await axios.get(URL);

    console.log(data.results);

    return data.results;
}

export const bringOneMovie = async(title) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${apiKey}`)

    return data.results
}