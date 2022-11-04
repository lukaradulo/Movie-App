import { movieInterface } from './../components/HomePage/Movies/MoviesTypes'

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const ADD_SEEN_MOVIE = 'ADD_SEEN_MOVIE';
export const REMOVE_SEEN_MOVIE = 'REMOVE_SEEN_MOVIE';

export const LOGIN = "LOGIN";

export const LIGHT_MODE = "LIGHT_MODE";
export const DARK_MODE = "DARK_MODE";

export type userType = {
  id: number;
  password: string;
  username: string;
} | string;

export const addMovie = (movie: movieInterface) => {
  return {
      type: ADD_MOVIE,
      payload: movie
  }
}

export const removeMovie = (movie: movieInterface) => {
  return {
      type: REMOVE_MOVIE,
      payload: movie
  }
}

export const addSeenMovie = (movie: movieInterface) => {
  return {
    type: ADD_SEEN_MOVIE,
    payload: movie
  }
}

export const removeSeenMovie = (movie: movieInterface) => {
  return {
    type: REMOVE_SEEN_MOVIE,
    payload: movie
  }
}