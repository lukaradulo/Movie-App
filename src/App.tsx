import React, { useContext } from 'react';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import MoviePage from './components/MoviePage/MoviePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import { LoginContext } from './context/LoginContext';

const App: React.FC = () => {
  const loginContext = useContext(LoginContext)!;
  const isLoggedIn = loginContext.state.loggedIn;

  return (
    <div className='wrapper'>
      {typeof isLoggedIn === 'object' ?
        <Router>
          <Navbar />
          <div className='body'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:movieid" element={<MoviePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </Router> :

        <div className='body'>
          <LoginPage />
        </div>
      }
    </div>
  );
}

export default App;
