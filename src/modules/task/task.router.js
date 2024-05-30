import { Router } from "express";
import * as taskSchema from "./task.schema.js";
import * as taskController from "./task.controller.js";
import catchError from "../../middlewares/catchError.js";
import { validation } from "../../middlewares/validation.js";
const taskRouter = new Router();

// ^post & get
taskRouter
  .route("/")
  .post(
    validation(taskSchema.createToDo),
    catchError(taskController.createToDo)
  )
  .get(validation(taskSchema.getTasks), catchError(taskController.getTasks));

  // ^update & delete
taskRouter
  .route("/:taskId")
  .patch(
    validation(taskSchema.updateTask),
    catchError(taskController.updateTask)
  )
  .delete(
    validation(taskSchema.deleteTask),
    catchError(taskController.deleteTask)
  );
export default taskRouter;
