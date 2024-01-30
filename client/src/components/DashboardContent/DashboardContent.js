// DashboardContent.js
import React from 'react'
import './DashboardContent.css'
import DashboardBox from '../DashboardBox/DashboardBox'

export default function DashboardContent({
  totalTasks,
  finishedTasks,
  pendingTasks,
  highPrioTasks,
}) {
  return (
    <div className="dashboard-content--container">
      <DashboardBox
        total={'High Priority Tasks'}
        tasks={highPrioTasks}
        colors={{ borderColor: 'red', fontColor: 'red' }}
      />
      <DashboardBox
        total={'Total Tasks'}
        tasks={totalTasks}
        colors={{ borderColor: 'green', fontColor: 'green' }}
      />

      <DashboardBox
        total={'Open Tasks'}
        tasks={pendingTasks}
        colors={{ borderColor: 'orange', fontColor: 'orange' }}
      />
      <DashboardBox
        total={'Completed Tasks'}
        tasks={finishedTasks}
        colors={{ borderColor: 'blue', fontColor: 'blue' }}
      />
    </div>
  )
}
