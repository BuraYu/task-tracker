// DashboardContent.js
import React from 'react'
import './DashboardContent.css'
import DashboardBox from '../DashboardBox/DashboardBox'

export default function DashboardContent({ totalTasks, finishedTasks }) {
  return (
    <div className="div-con">
      <DashboardBox
        total={'Total Tasks'}
        tasks={totalTasks}
        colors={{ borderColor: 'green', fontColor: 'green' }}
      />
      <DashboardBox
        total={'Finished Tasks'}
        tasks={finishedTasks}
        colors={{ borderColor: 'blue', fontColor: 'blue' }}
      />
      <DashboardBox
        total={'Pending Tasks'}
        tasks={finishedTasks}
        colors={{ borderColor: 'orange', fontColor: 'orange' }}
      />
      <DashboardBox
        total={'Open Tasks'}
        tasks={finishedTasks}
        colors={{ borderColor: 'red', fontColor: 'red' }}
      />
    </div>
  )
}
