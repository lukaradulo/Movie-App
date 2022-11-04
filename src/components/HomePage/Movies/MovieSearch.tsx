import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react'
import './../HomePage.css'
import MovieContainer from './MovieContainer';
import SavedMovies from './SavedMovies';
import { useSelector } from 'react-redux';
import { removeMovie, removeSeenMovie } from '../../../redux/actions';
import { movieInterface, stateInterface } from './MoviesTypes';

const MovieSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<movieInterface[]>([]);
  const watchlistedMovies = useSelector((state: stateInterface) => state.watchlist);
  const lastSeenMovies = useSelector((state: stateInterface) => state.seenMovies);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}&s=${searchTerm}`)
    .then(response => setMovies(response.data.Search))
    .catch(error => {console.log(error)})
  }, [searchTerm]);

  return (
    <div className='MovieSearch'>
      <div className='search-button'>
        <input
          className='input'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search'
        />
      </div>

      <div className='MovieContainer'>
        {(searchTerm === '') 
          ? <div>
              <SavedMovies movies={watchlistedMovies} title='Your Watchlist:' actionType={removeMovie}/> 
              <SavedMovies movies={lastSeenMovies} title='Your Last Seen Movies:' actionType={removeSeenMovie}/>
            </div> 
          : <MovieContainer movies={movies} />}
      </div>
    </div>
  )
}

export default MovieSearch;