import React from 'react';
import { NavLink } from 'react-router-dom';

const ToolBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/register">Register</NavLink>
  </nav>
);

export default ToolBar;
