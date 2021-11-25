import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideButtonWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="background" onClick={toggle}>Background</SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
          <SidebarLink to="interests" onClick={toggle}>Interests</SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          <SidebarRoute to="/login">Login</SidebarRoute>
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
