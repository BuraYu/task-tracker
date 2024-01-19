import React from 'react'
import './DashboardContent.css'
import DashboardBox from '../DashboardBox/DashboardBox'

export default function DashboardContent() {
  return (
    <div className="div-con">
      <DashboardBox total={'Total Tasks'} />
      <DashboardBox total={'Finished Tasks'} />
      <DashboardBox total={'Pending Tasks'} />
      <DashboardBox total={'Open Tasks'} />
    </div>
  )
}
