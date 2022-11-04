import * as React from 'react'
import './../HomePage.css'
import MovieCard from './MovieCard';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { grey } from '@mui/material/colors';
import { movieInterface } from './MoviesTypes';

const MovieContainer: React.FC<{ movies: movieInterface[] }> = ( props ) => {
  const movies = props.movies;
  
  return (
    <div>
      {movies?.length > 0 ? (
        <div className='movie-list'>
          {movies.map((movie:any) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
      <div className='empty'>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 50, color: grey[800] }} />
        <div className='no-results'>No results found</div>
      </div>
      )}
    </div>
  )
}

export default MovieContainer;