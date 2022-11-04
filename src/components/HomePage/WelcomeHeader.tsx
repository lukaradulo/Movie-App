import * as React from 'react'
import './HomePage.css'

const WelcomeHeader: React.FC = () => {
  return (
    <div className='WelcomeHeader'>
      <h1>Welcome</h1>
      <div className='sub-header'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia sodales turpis sed vehicula.</div>
    </div>
  );
}

export default WelcomeHeader;