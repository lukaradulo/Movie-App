import * as React from 'react';

interface NavbarButtonProps {
  open: boolean;
  name: string;
  icon: React.ReactNode;
};

const NavbarButton: React.FC<NavbarButtonProps> = props => {
  return (
    <li>
      {props.open ? props.name : props.icon}
    </li>
  )
}

export default NavbarButton;