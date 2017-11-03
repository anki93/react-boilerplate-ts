import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes from '../../Routes';


const links = Routes.map( (r, i) =>
    <li key={i}><NavLink to={r.path}>{r.text}</NavLink></li>
)

const Sidebar = () => (
  <div className="col-md-2 siderbar">
    <ul>{ links } </ul>
  </div>
)

export default Sidebar;
