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
    <div className="div-con">
      <DashboardBox
        total={'Total Tasks'}
        tasks={totalTasks}
        colors={{ borderColor: 'green', fontColor: 'green' }}
      />
      <DashboardBox
        total={'High Priority Tasks'}
        tasks={highPrioTasks}
        colors={{ borderColor: 'red', fontColor: 'red' }}
      />
      <DashboardBox
        total={'Pending Tasks'}
        tasks={pendingTasks}
        colors={{ borderColor: 'orange', fontColor: 'orange' }}
      />
      <DashboardBox
        total={'Finished Tasks'}
        tasks={finishedTasks}
        colors={{ borderColor: 'blue', fontColor: 'blue' }}
      />
    </div>
  )
}
