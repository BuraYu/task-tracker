import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import DashboardContent from '../../components/DashboardContent/DashboardContent'
import './Dashboard.css'
import CreateTask from '../../components/CreateTask/CreateTask.js'

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container">
        <Navbar className="navbar" />
        <div className="dashboard-content-container">
          <DashboardContent className="dashboard-content" />
          <CreateTask />
        </div>
      </div>
    </>
  )
}
