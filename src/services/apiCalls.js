
import axios from "axios";

const apiKey = "210d6a5dd3f16419ce349c9f1b200d6d";

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

export const bringMovies = async() => {

    let {data} = await axios.get(URL);

    console.log(data.results);

    return data.results;
}