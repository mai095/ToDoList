import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 12,
      require: true,
    },
    description: { type: String, minLength: 3, maxLength: 300 },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const taskModel = model("Task", taskSchema);
export default taskModel;
