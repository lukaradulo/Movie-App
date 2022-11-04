import * as React from 'react'
import './../HomePage.css'
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { movieAction, movieInterface } from './MoviesTypes';

interface savedMoviesInterface {
  movies: movieInterface[];
  title: string;
  actionType: (movie: movieInterface) => movieAction;
}

const SavedMovies: React.FC<savedMoviesInterface> = ( props ) => {
  const dispatch = useDispatch();

  return (
    <div className='SavedMovies'>
      <div className='watchlist-title'>{props.title}</div>
      { props.movies?.length > 0 ? (
        <div className='watchlist-movies'>
          {props.movies.map((movie:any) => (
            <div className='saved-movie-container'>
              <div className='remove-button'><CloseIcon fontSize='large' onClick={() => dispatch(props.actionType(movie))} style={{ cursor: 'pointer' }}/></div>
              <img src={movie.Poster} alt={movie.Title} height='190'/>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: '10px', color: '#606060' }}>none yet</div>
      )}
    </div>
  )
}

export default SavedMovies