import joi from "joi";
import { validateObjectId } from "../../middlewares/validation.js";

// ^createToDo
export const createToDo = joi
  .object({
    title: joi.string().required().min(3).max(12),
    description: joi.string().min(3).max(300),
  })
  .required();

// ^getTasks
export const getTasks = joi
  .object({
    completed: joi.boolean(),
  })
  .required();

// ^updateTask
export const updateTask = joi
  .object({
    title: joi.string().min(3).max(12),
    description: joi.string().min(3).max(300),
    taskId: joi.custom(validateObjectId).required(),
    completed:joi.boolean()
  })
  .required();

// ^deleteTask
export const deleteTask = joi
  .object({
    taskId: joi.custom(validateObjectId).required(),
  })
  .required();
