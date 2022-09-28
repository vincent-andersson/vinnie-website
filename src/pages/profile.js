import React from 'react';
import Profile from '../components/Profile';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo } from '../components/Navbar/NavbarElements';

const ProfilePage = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav scrollNav={true}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome} style={{marginLeft: "15.5px"}}>vinnie.</NavLogo>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      <Profile />
    </>
  )
}

export default ProfilePage
