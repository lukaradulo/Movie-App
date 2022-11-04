import * as React from 'react'
import './MoviePage.css'
import { CardMedia, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/actions';
import { singleMovieInterface } from './../HomePage/Movies/MoviesTypes';

const MovieBasicInfo: React.FC<{ movie: singleMovieInterface }> = (prop) => {
  const dispatch = useDispatch();
  const movie = prop.movie;

  return (
    <div className='top-section'>
      <CardMedia component='img' height='300' image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />

      <div className='movie-content'>
        <h1>{movie.Title}</h1>
        <div>Rating: {movie.imdbRating}</div>
        <div className='wishlist-button'><Button size='medium' onClick={() => dispatch(addMovie(movie))}>+ Wishlist</Button></div>
      </div>
    </div>
  )
}

export default MovieBasicInfo