import mongoose from "mongoose";

const Schema = mongoose.Schema

export const TodoSchema = new Schema({
  text:{
    type: String,
    required: true
  },
  isCompleted:{
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})