import React from 'react'
import './CreateTask.css'

const CreateTask = () => {
  return (
    <div className="create-task-container">
      <h1>Create a task</h1>
      <form action="" className="dashboard-form">
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Description</label>
        <textarea name="postContent" rows={5} cols={50} />
        <label htmlFor="">Priority</label>
        <select name="cars" id="cars">
          <option value="volvo">CODE RED</option>
          <option value="saab">High Prio</option>
          <option value="mercedes">Mid Prio</option>
          <option value="audi">Low Prio</option>
        </select>
        <label htmlFor="">Owner</label>
        <input type="text" />
      </form>
      <button type="submit">Submit</button>
    </div>
  )
}
export default CreateTask
