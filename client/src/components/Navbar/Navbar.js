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
          <a href="/HighPrioTasks">High Priority Tasks</a>
        </li>
        <li>
          <a href="/OpenTasks">Open Tasks</a>
        </li>
        <li>
          <a href="/AllTasks">All Tasks</a>
        </li>
        <li>
          <a href="/FinishedTasks">Finished Tasks</a>
        </li>
      </ul>
    </div>
  )
}
