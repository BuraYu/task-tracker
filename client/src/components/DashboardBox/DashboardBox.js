import React from 'react'
import './DashboardBox.css'

const DashboardBox = ({ total, tasks }) => {
  console.log('tasdfasdfel', tasks)

  return (
    <div className="dashboard-box-container">
      <div className="dashboard-box-nr">
        <span>{total}</span>
        <span>{tasks}</span>
      </div>
      <div className="hurr">
        <span>Rando icon</span>
      </div>
    </div>
  )
}
export default DashboardBox
