import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './HighPrioTasks.css'
import DetailsView from '../../components/DetailsView/DetailsView'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OpenTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [receivedData, setReceivedData] = useState('')

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
  }, [receivedData])

  const receiveDataFromChild = (data) => {
    setReceivedData(data)
  }

  function formatDate(input) {
    const date = new Date(input)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    return `${formattedDay}.${formattedMonth}.${year}`
  }

  const handleTaskClick = (clickedTask) => {
    setSelectedTask({ data: clickedTask })
  }

  console.log('Filtered Tasks:', tasks)

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
                  {tasks.length > 0 ? (
                    tasks
                      .filter(
                        (task) =>
                          task.priority === 'High' && task.status !== 'Done'
                      )
                      .map((task) => (
                        <tr
                          key={task._id}
                          onClick={() => handleTaskClick(task._id)}
                        >
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
          <DetailsView
            data={selectedTask}
            sendDataToParent={receiveDataFromChild}
          />
        </div>
      </div>
    </>
  )
}

export default OpenTasks
