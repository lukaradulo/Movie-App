import { debounce } from 'debounce';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { LoginProvider } from './context/LoginContext';
import { ThemeProvider } from './context/ThemeContext';
import { loadState, saveState } from './redux/LocalStorage';
import allReducers from './redux/reducers';
import { stateInterface } from './components/HomePage/Movies/MoviesTypes';

document.title = 'Movie App';

const persistedState: stateInterface = loadState();

const store = createStore(
  allReducers,
  persistedState
);

store.subscribe(debounce(() => {
  saveState({
      watchlist: store.getState().watchlist,
      seenMovies: store.getState().seenMovies
  });
}, 800));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <LoginProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoginProvider>
  </Provider>
);
