import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DetailsView.css'

const DetailsView = ({ data, sendDataToParent }) => {
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [commentContent, setCommentContent] = useState('')
  const [comments, setComments] = useState([])

  const taskId = data ? data.data : null

  useEffect(() => {
    const fetchData = async () => {
      if (taskId) {
        setLoading(true)
        try {
          const [taskResponse, commentsResponse] = await Promise.all([
            axios.get(`http://localhost:5555/tasks/${taskId}`),
            axios.get(`http://localhost:5555/tasks/${taskId}/comments`),
          ])

          const { title, owner, status, priority, desc } = taskResponse.data
          setTask({ title, owner, status, priority, desc })
          setSelectedPriority(priority)
          setSelectedStatus(status)
          setComments(commentsResponse.data)
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [taskId])

  const handlePriorityChange = (event) => {
    const newPriority = event.target.value

    if (taskId) {
      axios
        .put(`http://localhost:5555/tasks/${taskId}`, { priority: newPriority })
        .then((response) => {
          setTask({ ...task, priority: newPriority })
          setSelectedPriority(newPriority)
          sendDataToParent({ ...task, priority: newPriority })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const handleStatusChange = (event) => {
    const newStatus = event.target.value

    if (taskId) {
      axios
        .put(`http://localhost:5555/tasks/${taskId}`, { status: newStatus })
        .then((response) => {
          setTask({ ...task, status: newStatus })
          setSelectedStatus(newStatus)
          sendDataToParent({ ...task, status: newStatus })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault()

    if (taskId && commentContent) {
      try {
        await axios.post(`http://localhost:5555/tasks/${taskId}/comments`, {
          text: commentContent,
        })

        const commentsResponse = await axios.get(
          `http://localhost:5555/tasks/${taskId}/comments`
        )
        setComments(commentsResponse.data)
        setCommentContent('')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleDeleteComment = async (commentId) => {
    if (taskId && commentId) {
      const confirmDelete = window.confirm(
        'Are you sure you want to delete this comment?'
      )

      if (confirmDelete) {
        try {
          await axios.delete(
            `http://localhost:5555/tasks/${taskId}/comments/${commentId}`
          )
          const commentsResponse = await axios.get(
            `http://localhost:5555/tasks/${taskId}/comments`
          )
          setComments(commentsResponse.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
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

  return task ? (
    <div className="open-tasks--container-res">
      <div className="details-view-title-container">
        <span>{taskId}</span>
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
          <select
            name="status"
            id="status"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="In Progress">In Progress</option>
            <option value="To Do">To Do</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="select">
          <label htmlFor="">Priority</label>
          <select
            name="priority"
            id="priority"
            value={selectedPriority}
            onChange={handlePriorityChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <hr />
      <span>{task.desc}</span>
      <hr />
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="commentContent">Comment:</label>
        <textarea
          id="commentContent"
          name="commentContent"
          rows={5}
          cols={50}
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button type="submit">Add comment</button>
      </form>
      <hr />
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              {comment.text} {formatDate(comment.createdAt)}
              <button onClick={() => handleDeleteComment(comment._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <span>Click on the task</span>
  )
}

export default DetailsView
