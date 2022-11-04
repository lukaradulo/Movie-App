import * as React from 'react';
import './HomePage.css';
import './../../App.css';
import WelcomeHeader from './WelcomeHeader';
import MovieSearch from './Movies/MovieSearch';

const HomePage: React.FC = () => {
  return (
    <div className='HomePage'>
      <WelcomeHeader />
      <MovieSearch />
    </div>
  );
}

export default HomePage;