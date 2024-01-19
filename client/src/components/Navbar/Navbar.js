import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-ul">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/OpenTasks">Open Tasks</a>
        </li>
        <li>
          <a href="/favTasks">Favourite Tasks</a>
        </li>
        <li>
          <a href="/CreatedByMe">Created By Me</a>
        </li>
      </ul>
    </div>
  )
}
