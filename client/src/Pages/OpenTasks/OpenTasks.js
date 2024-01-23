import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './OpenTasks.css'
import DetailsView from '../../components/DetailsView/DetailsView'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const OpenTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

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

  function formatDate(input) {
    const date = new Date(input)
    const day = date.getDate()
    const month = date.getMonth() + 1 // Month is zero-based
    const year = date.getFullYear()

    // Pad single-digit day and month with leading zero if needed
    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    return `${formattedDay}.${formattedMonth}.${year}`
  }

  return (
    <>
      <Header />
      <div className="container">
        <Navbar className="navbar" />
        <div className="content--container">
          <div className="open-tasks--container-fin">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table id="tasks">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>created on</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log(tasks)}

                  {tasks.length > 0 ? (
                    tasks.map((task) => (
                      <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{formatDate(task.createdAt)}</td>
                        <td>{task.status}</td>
                        <td>{task.priority}</td>
                        <td>{task.owner}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No open tasks found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
          <DetailsView />
        </div>
      </div>
    </>
  )
}

export default OpenTasks
