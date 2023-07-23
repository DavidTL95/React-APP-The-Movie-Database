
import axios from "axios";

export const URL_images = "https://image.tmdb.org/t/p/original/";

// const nuevaURL='https://www.themoviedb.org/t/p/w300_and_h450_bestv2';

const apiKey = "210d6a5dd3f16419ce349c9f1b200d6d";

// const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

const URL = 'https://api.themoviedb.org/3/discover/movie'
// export const bringMovies = async() => {

//     let {data} = await axios.get(URL);

//     return data.results;
// }

export const bringMovies = async() => {

    let res;

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWI0NDFlMGUwNjlkOTFhMGU4MDkwZGViNjlmYmRiNSIsInN1YiI6IjY0YmE2ODRiMDZmOTg0MDBjNGYxZGE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IyVPQZwiS7sdzV-9-g_3Hi6DOXF5dgM31_nV20h0UXQ'
      }
    };

    let { data } = await axios.get(URL, options);

    return data.results
  }

export const bringOneMovie = async(title) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title.search}&api_key=${apiKey}`)

    return data.results
}

export const bringMovieByID = async(id) => {

    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/find/external_id',
    params: {external_source: 'tvdb_id'},
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWI0NDFlMGUwNjlkOTFhMGU4MDkwZGViNjlmYmRiNSIsInN1YiI6IjY0YmE2ODRiMDZmOTg0MDBjNGYxZGE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IyVPQZwiS7sdzV-9-g_3Hi6DOXF5dgM31_nV20h0UXQ'
    }
    };

    let { data } = await axios.get(`https://api.themoviedb.org/3/find/${id}`, options);

    return data.results
}

export const bringTopMovies = async() => {

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWI0NDFlMGUwNjlkOTFhMGU4MDkwZGViNjlmYmRiNSIsInN1YiI6IjY0YmE2ODRiMDZmOTg0MDBjNGYxZGE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IyVPQZwiS7sdzV-9-g_3Hi6DOXF5dgM31_nV20h0UXQ'
    }
  };

  let { data } = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options);

  return data.results
}

// ------------------------------------------------------------

export const bringSeries = async() => {

  let res;

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/tv',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWI0NDFlMGUwNjlkOTFhMGU4MDkwZGViNjlmYmRiNSIsInN1YiI6IjY0YmE2ODRiMDZmOTg0MDBjNGYxZGE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IyVPQZwiS7sdzV-9-g_3Hi6DOXF5dgM31_nV20h0UXQ'
    }
  };

  let { data } = await axios.get('https://api.themoviedb.org/3/discover/tv', options);

  return data.results
}

export const bringTopSeries = async() => {

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/top_rated',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWI0NDFlMGUwNjlkOTFhMGU4MDkwZGViNjlmYmRiNSIsInN1YiI6IjY0YmE2ODRiMDZmOTg0MDBjNGYxZGE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IyVPQZwiS7sdzV-9-g_3Hi6DOXF5dgM31_nV20h0UXQ'
    }
  };

  let { data } = await axios.get('https://api.themoviedb.org/3/tv/top_rated', options);

  return data.results
}

export const bringOneSerie = async(title) => {
  let {data} = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${title.search}&api_key=${apiKey}`)

  return data.results
}