import * as React from 'react';
import { useState, useContext } from 'react';
import './Navbar.css';
import { ThemeContext, changingTheme } from "../../context/ThemeContext";
import NavbarToggler from './NavbarToggler';
import NavbarButton from './NavbarButton';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link } from 'react-router-dom';
import { LIGHT_MODE, DARK_MODE } from './../../redux/actions';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext)!;
  const darkMode: boolean = theme.state.darkMode;
  changingTheme(darkMode);

  const darkModeToggler = () => {
    if (darkMode) {
      theme.dispatch({ type: LIGHT_MODE });
    } else {
      theme.dispatch({ type: DARK_MODE });
    }
  };

  return (
    <div className={`navbar ${open ? 'open' : ''}`}>

      <div className='navbar-toggler'>
        <NavbarToggler open={open} toggle={() => setOpen(!open)} />
      </div>
      
      <div className='navbar-menu'>
        <ul>
          <Link to="/"><NavbarButton open={open} name='Home' icon={<HomeIcon />} /></Link>
          <Link to="/about"><NavbarButton open={open} name='About' icon={<PeopleAltIcon />}/></Link>
        </ul>
      </div>

      <div className='navbar-darkmode-btn'>
        <div onClick={darkModeToggler}><LightbulbIcon /></div>
      </div>

    </div>
  );
}

export default Navbar;