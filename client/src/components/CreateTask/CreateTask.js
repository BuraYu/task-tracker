import React, { useState } from 'react'
import axios from 'axios'
import './CreateTask.css'

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    status: 'To Do',
    desc: '',
    priority: 'Low',
    owner: '',
  })

  // const test = () => {
  //   fetchChatGPT('tell me a joke')
  // }
  // const fetchChatGPT = async (userMessage) => {
  //   try {
  //     const response = await fetch('http://localhost:5555/chatgpt', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ userMessage }),
  //     })

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data from server')
  //     }

  //     const data = await response.json()
  //     console.log('Received message from server:', data)
  //   } catch (error) {
  //     console.error('Error fetching data:', error.message)
  //   }
  // }

  // // Example: Send a user message to the server
  // const userMessage = 'What is the weather like today?'
  // fetchChatGPT(userMessage)

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:5555/tasks', taskData)

      console.log('Task created successfully:', response.data)
    } catch (error) {
      console.error('Error creating task:', error.message)
    }
  }

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="create-task-container">
      <h1 className="create-task-header">Create a task</h1>
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
