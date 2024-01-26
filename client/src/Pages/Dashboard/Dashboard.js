import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import DashboardContent from '../../components/DashboardContent/DashboardContent'
import './Dashboard.css'
import CreateTask from '../../components/CreateTask/CreateTask.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5555/tasks/`)
      .then((response) => {
        setTasks(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  //task length
  const numberTasks = tasks.length

  //Finished tasks
  const finishedTasks = () => {
    let x = 0
    tasks.forEach((element) => {
      if (element.status === 'Done') {
        x++
      }
    })
    return x
  }
  //pending tasks
  const pendingTasks = () => {
    let x = 0
    tasks.forEach((element) => {
      if (element.status !== 'Done') {
        x++
      }
    })
    return x
  }
  //high prio
  const highPrioTasks = () => {
    let x = 0
    tasks.forEach((element) => {
      if (element.priority === 'High') {
        x++
      }
    })
    return x
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Header />
          <div className="container">
            <Navbar className="navbar" />
            <div className="dashboard-content-container">
              <DashboardContent
                className="dashboard-content"
                totalTasks={numberTasks}
                finishedTasks={finishedTasks()}
                pendingTasks={pendingTasks()}
                highPrioTasks={highPrioTasks()}
              />
              <CreateTask />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
