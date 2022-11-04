
export interface movieInterface {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface movieAction {
  type: string;
  payload: movieInterface;
}

export interface stateInterface {
  watchlist: movieInterface[]; 
  seenMovies: movieInterface[];
}

export interface singleMovieInterface {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: {Source: string, Value: string}[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export const emptyMovieObject = {
  Actors: '',
  Awards: '',
  BoxOffice: '',
  Country: '',
  DVD: '',
  Director: '',
  Genre: '',
  Language: '',
  Metascore: '',
  Plot: '',
  Poster: '',
  Production: '',
  Rated: '',
  Ratings: [{Source: '', Value: ''}],
  Released: '',
  Response: '',
  Runtime: '',
  Title: '',
  Type: '',
  Website: '',
  Writer: '',
  Year: '',
  imdbID: '',
  imdbRating: '',
  imdbVotes: ''
}
