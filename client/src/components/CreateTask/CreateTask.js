import React, { useState } from 'react'
import axios from 'axios'
import './CreateTask.css'
import OpenAI from 'openai'
import { useCallback } from 'react'

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
  const translateText = useCallback(async () => {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    })

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You'll be provided with a task title and a task description you'll get it as a json format, don't change the key names.  I need you to make the values to sound more professional. Please send the data back as Json format and just the message without any affixes. If the entry has "In German:" or "In Spanish:" in the beginning, give the result back in that language, without mentioning it in the response`,
          },
          {
            role: 'user',
            content: `{TaskTitle: ${taskData.title}, TaskDescription: ${taskData.desc}}`,
          },
        ],
        stream: false,
        temperature: 0.1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })

      if (response && response.choices && response.choices.length > 0) {
        console.log(response.choices[0].message.content)
        const data = response.choices[0].message.content
        const jsonData = JSON.parse(data)
        console.log('typeof', typeof jsonData)
        handleTaskUpdate(jsonData)
      } else {
        console.log('failed')
      }
    } catch (error) {
      console.error('Error in translation:', error)
    }
  })

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
    console.log()
  }

  const handleTaskUpdate = (jsonData) => {
    console.log(jsonData.TaskTitle)
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      title: jsonData.TaskTitle,
      desc: jsonData.TaskDescription,
    }))
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

        <label htmlFor="owner">Created by</label>
        <input
          type="text"
          name="owner"
          value={taskData.owner}
          onChange={handleChange}
          required
        />
        <div className="button-container">
          <button type="submit">Submit</button>

          <button type="button" className="btn-grad" onClick={translateText}>
            fix me
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
