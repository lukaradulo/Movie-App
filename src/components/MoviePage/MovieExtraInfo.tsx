import * as React from 'react'
import './MoviePage.css'
import { singleMovieInterface } from './../HomePage/Movies/MoviesTypes';

const MovieExtraInfo: React.FC<{ movie: singleMovieInterface }> = (prop) => {
  const movie = prop.movie;

  return (
    <div className='bottom-section'>
      <div>Description: {movie.Plot}</div>
      <div className='actors'>Actors: {movie.Actors}</div>
    </div>
  )
}

export default MovieExtraInfo;