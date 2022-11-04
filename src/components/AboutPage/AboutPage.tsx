import * as React from 'react';
import './AboutPage.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import MapLocation from './MapLocation';

const AboutPage: React.FC = () => {
  return (
    <div className='AboutPage'>

      <div className='about-us'>
        <AboutUs />
      </div>

      <div className='contact-and-map'>
        <div className='contact-us'>
          <ContactUs />
        </div>
        <div className='find-us'>
          <MapLocation />
        </div>
      </div>

    </div>  
  );
}

export default AboutPage;