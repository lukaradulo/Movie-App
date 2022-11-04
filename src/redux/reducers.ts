import { LIGHT_MODE, DARK_MODE, LOGIN, userType } from "./actions";
import { ADD_MOVIE, REMOVE_MOVIE, ADD_SEEN_MOVIE, REMOVE_SEEN_MOVIE } from "./actions";
import { combineReducers } from "redux";
import { movieInterface, movieAction } from './../components/HomePage/Movies/MoviesTypes';

interface loginState {
  loggedIn: userType;
}

interface loginAction {
  type: string;
  payload: userType;
}

export const themeReducer = (state: { darkMode: boolean }, action: { type: string }) => {
  switch (action.type) {
    case LIGHT_MODE:
      return { darkMode: false };
    case DARK_MODE:
      return { darkMode: true };
    default:
      return state;
  }
};

export const loginReducer = (state: loginState, action: loginAction) => {
  switch (action.type) {
    case LOGIN:
      if (typeof action.payload === 'object') {
        return { loggedIn: action.payload }
      } else {
        alert('Incorrect username or password!')
        return { loggedIn: action.payload }
      }
    default:
      return state;
  }
};

const watchlist = (state: movieInterface[] = [], action: movieAction) => {
  switch (action.type) {

    case ADD_MOVIE:
      state = state.slice();
      if (!state.includes(action.payload)) {
        state.unshift(action.payload);
        alert('I added ' + action.payload.Title + ' to your watchlist!');
      }
      return state;
    case REMOVE_MOVIE:
      state = state.slice();
      const index = state.indexOf(action.payload);
      if (index > -1) {
          state.splice(index, 1);
      }
      return state;    
    default:
      return state;
  }
}

const seenMovies = (state: movieInterface[] = [], action: movieAction) => {
  switch (action.type) {

    case ADD_SEEN_MOVIE:
      state = state.slice();
      if (!state.includes(action.payload)) {
        state.unshift(action.payload);
        if (state.length > 5) {
          state.pop();
        }
      }
      return state;
    case REMOVE_SEEN_MOVIE:
      state = state.slice();
      const index = state.indexOf(action.payload);
      if (index > -1) {
          state.splice(index, 1);
      }
      return state;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  watchlist: watchlist,
  seenMovies: seenMovies
});

export default allReducers;