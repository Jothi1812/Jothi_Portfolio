import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarContainer, NavLink } from '../styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/objective">Objective</NavLink>
      <NavLink to="/area-of-interest">Area of Interest</NavLink>
      <NavLink to="/programming-languages">Programming Languages</NavLink>
      <NavLink to="/internship-training">Internship & Training</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/additional-qualifications">Additional Qualifications</NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
