import React from 'react'
import './Header.css'
import LogoutButton from '../../LogoutButton/LogoutButton'

export default function Header() {
  return (
    <div className="header-div-container">
      <h1 className="header-heading">Task Tracker</h1>
      <LogoutButton />
    </div>
  )
}
