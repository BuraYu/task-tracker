import express from "express";
import { Task, Comment } from "../models/taskModel.js";

const router = express.Router();

// Route for Save a new task
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.status ||
      !request.body.desc ||
      !request.body.priority ||
      !request.body.owner
    ) {
      return response.status(400).send({
        message: "Send all required fields.",
      });
    }
    const newTask = {
      title: request.body.title,
      status: request.body.status,
      desc: request.body.desc,
      priority: request.body.priority,
      owner: request.body.owner,
    };

    const task = await Task.create(newTask);

    return response.status(201).send(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All task from database
router.get("/", async (request, response) => {
  try {
    const tasks = await Task.find({});

    return response.status(200).json({
      data: tasks,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One task from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findById(id);

    return response.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a task
router.put("/:id", async (request, response) => {
  try {
    // if (
    //   !request.body.title ||
    //   !request.body.status ||
    //   !request.body.desc ||
    //   !request.body.priority ||
    //   !request.body.owner
    // ) {
    //   return response.status(400).send({
    //     message: "Send all required fields",
    //   });
    // }

    const { id } = request.params;

    const result = await Task.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).send({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a task
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Task.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }

  
});

router.post("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const task = await Task.findById(id);

    if (!task) {
      return response.status(404).json({ message: "Task not found" });
    }

    const { text } = request.body; // Ensure 'text' is provided in the request body

    if (!text) {
      return response.status(400).json({ message: "Comment text is required" });
    }

    const newComment = {
      text,
      // other fields for the comment
    };

    task.comments.push(newComment);
    await task.save();

    return response.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id/comments", async (request, response) => {
  try {
    const { id } = request.params;
    const task = await Task.findById(id);

    if (!task) {
      return response.status(404).json({ message: "Task not found" });
    }

    const comments = task.comments;
    return response.status(200).json(comments);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/:id/comments", async (request, response) => {
  try {
    const { id } = request.params;
    const task = await Task.findById(id);

    if (!task) {
      return response.status(404).json({ message: "Task not found" });
    }

    const { text } = request.body;

    if (!text) {
      return response.status(400).json({ message: "Comment text is required" });
    }

    const newComment = {
      text,
    };

    task.comments.push(newComment);
    await task.save();

    return response.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
});



export default router;