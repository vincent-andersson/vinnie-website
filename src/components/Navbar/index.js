import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavButtonLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>vinnie.</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="background">Background</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience">Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="interests">Interests</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to='/login'> Login</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
