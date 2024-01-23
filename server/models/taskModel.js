import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    // Define the schema for comments
    text: {
      type: String,
      required: true,
    },
    // ... other fields for comments
  },
  {
    timestamps: true,
  }
);

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    comments: [commentSchema], 
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);
const Comment = mongoose.model('Comment', commentSchema);

export { Task, Comment };
