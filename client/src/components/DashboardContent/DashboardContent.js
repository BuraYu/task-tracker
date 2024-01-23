import React from 'react'
import './DashboardContent.css'
import DashboardBox from '../DashboardBox/DashboardBox'

export default function DashboardContent({ totalTasks, finishedTasks }) {
  console.log(totalTasks)
  return (
    <div className="div-con">
      <DashboardBox total={'Total Tasks'} tasks={totalTasks} />
      <DashboardBox total={'Finished Tasks'} tasks={finishedTasks} />
      <DashboardBox total={'Pending Tasks'} />
      <DashboardBox total={'Open Tasks'} />
    </div>
  )
}
