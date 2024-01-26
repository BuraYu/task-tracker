import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <NavLink exact to="/" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/HighPrioTasks" activeClassName="active">
            High Priority Tasks
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/OpenTasks" activeClassName="active">
            Open Tasks
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/AllTasks" activeClassName="active">
            All Tasks
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink to="/FinishedTasks" activeClassName="active">
            Finished Tasks
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
