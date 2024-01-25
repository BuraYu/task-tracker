// DashboardBox.js
import React from 'react'
import './DashboardBox.css'

const DashboardBox = ({ total, tasks, colors }) => {
  const { borderColor, fontColor } = colors || {}

  return (
    <div
      className="dashboard-box-container"
      style={{ borderLeft: `0.5rem ${borderColor} solid` }}
    >
      <div className="dashboard-box-nr">
        <span className="dashboard-box-title" style={{ color: fontColor }}>
          {total}
        </span>
        <span className="dashboard-box-tasks">{tasks}</span>
      </div>
    </div>
  )
}

export default DashboardBox
