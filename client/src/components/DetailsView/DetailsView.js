import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
import './DetailsView.css'

const DetailsView = (data) => {
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(false)
  const taskId = data.data
  console.log(taskId)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5555/tasks/${taskId}`)
      .then((response) => {
        setTask(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [data])

  // function formatDate(input) {
  //   const date = new Date(input)
  //   const day = date.getDate()
  //   const month = date.getMonth() + 1 // Month is zero-based
  //   const year = date.getFullYear()

  //   // Pad single-digit day and month with leading zero if needed
  //   const formattedDay = day < 10 ? `0${day}` : day
  //   const formattedMonth = month < 10 ? `0${month}` : month

  //   return `${formattedDay}.${formattedMonth}.${year}`
  // }

  return task ? (
    <div className="open-tasks--container-res">
      <div className="details-view-title-container">
        <span>{data.data}</span>
        <button className="btn-close" onClick={() => setTask(null)}>
          X
        </button>
      </div>
      <hr />
      <h1>{task.title}</h1>
      <h4>{task.owner}</h4>
      <hr />
      <div className="status-task">
        <div className="select">
          <label htmlFor="">Status</label>
          <select name="prio" id="prio" value={task.status}>
            <option value="In Progress">In Progress</option>
            <option value="To Do">To Do</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="select">
          <label htmlFor="">Priority</label>
          <select name="prio" id="prio" value={task.priority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <hr />
      <span>{task.desc}</span>
      <hr />
      <form>
        <label htmlFor=""></label>
        <textarea name="postContent" rows={5} cols={50} />
      </form>
      <button type="submit">Add comment</button>
      <hr />
    </div>
  ) : (
    <span>Click on the task</span>
  )
}
export default DetailsView
