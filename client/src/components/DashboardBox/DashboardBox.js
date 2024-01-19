import React from 'react'
import './DashboardBox.css'

const DashboardBox = (props) => {
  return (
    <div className="dashboard-box-container">
      <div className="dashboard-box-nr">
        <span>{props.total}</span>
        <span>0</span>
      </div>
      <div className="hurr">
        <span>Rando icon</span>
      </div>
    </div>
  )
}
export default DashboardBox
