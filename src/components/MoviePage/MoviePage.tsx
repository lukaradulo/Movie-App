import * as React from 'react';
import { useEffect, useState } from 'react'
import './MoviePage.css'
import MovieBasicInfo from './MovieBasicInfo';
import MovieExtraInfo from './MovieExtraInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { singleMovieInterface, emptyMovieObject } from './../HomePage/Movies/MoviesTypes';

const MoviePage: React.FC = () => {
  const [movie, setMovie] = useState<singleMovieInterface>(emptyMovieObject);
  let { movieid } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}&i=${movieid}`)
    .then(response => setMovie(response.data))
    .catch(error => {console.log(error)})
  });

  return (
    <div className='MoviePage'>
      <MovieBasicInfo movie={movie}/>
      <MovieExtraInfo movie={movie}/>
    </div>
  )
}

export default MoviePage;