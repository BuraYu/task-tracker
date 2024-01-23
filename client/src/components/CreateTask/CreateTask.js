import React, { useState } from 'react'
import axios from 'axios'
import './CreateTask.css'

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    status: 'To Do', // You may need to set a default value for status
    desc: '',
    priority: 'Low', // You may need to set a default value for priority
    owner: '',
  })

  const handleSubmit = async (e) => {
    try {
      // Send a POST request to the server
      const response = await axios.post('http://localhost:5555/tasks', taskData)

      console.log('Task created successfully:', response.data)
      // You may want to perform additional actions, such as updating the UI or state
    } catch (error) {
      console.error('Error creating task:', error.message)
    }
  }

  const handleChange = (e) => {
    // Update the taskData state as the user types
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="create-task-container">
      <h1>Create a task</h1>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          rows={5}
          cols={50}
          value={taskData.desc}
          onChange={handleChange}
          required
        />

        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          value={taskData.priority}
          onChange={handleChange}
          required
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          name="owner"
          value={taskData.owner}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateTask
