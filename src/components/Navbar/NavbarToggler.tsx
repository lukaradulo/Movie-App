import * as React from 'react';
import './Navbar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

interface NavbarTogglerProps {
  open: boolean;
  toggle: () => void;
};

const NavbarToggler: React.FC<NavbarTogglerProps> = props => {
  return (
    <div>
      {props.open ? <CloseIcon className='close-icon' onClick={props.toggle} sx={{ fontSize: 30 }} /> : <ArrowForwardIosIcon className='open-icon' onClick={props.toggle} />}
    </div>
  )
}

export default NavbarToggler;