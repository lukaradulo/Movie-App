import * as React from 'react';
import './../HomePage.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie, addSeenMovie } from '../../../redux/actions';
import { movieInterface } from './MoviesTypes';
 
const MovieCard: React.FC<{ movie: movieInterface }> = prop => {
  const movie = prop.movie;
  const movieUrl = '/movie/' + movie.imdbID;
  const dispatch = useDispatch();

  return (
    <div className="movie">
      <Card sx={{ maxWidth: 310 }} className='movie-card'>
        <Link to={movieUrl} onClick={() => dispatch(addSeenMovie(movie))}>
          <CardMedia component='img' height='200' image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>{movie.Title} ({movie.Year})</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => dispatch(addMovie(movie))}>+ Wishlist</Button>
         </CardActions>
      </Card>
    </div>
  );
}

export default MovieCard;