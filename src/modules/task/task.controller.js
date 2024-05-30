import taskModel from "../../../DB/models/task.model.js";

// *createToDo
export const createToDo = async (req, res, next) => {
  const task = await taskModel.create(req.body);

  return res.json({
    success: true,
    message: "Task Created Successfully!",
    task,
  });
};

// *getTasks
export const getTasks = async (req, res, next) => {
  if (req.body.completed) {
    const tasks = await taskModel.find({ completed: req.body.completed });
    return res.json({
      success: true,
      message: `${req.body.completed} Completed Tasks`,
      tasks,
    });
  }

  const tasks = await taskModel.find();
  return res.json({
    success: true,
    message: "All Tasks",
    tasks,
  });
};

// *updateTask
export const updateTask = async (req, res, next) => {
  const task = await taskModel.findByIdAndUpdate(
    req.params.taskId,
    {
      ...req.body,
    },
    { new: true }
  );
  if (!task) return next(new Error("Task not found", { cause: 404 }));

  return res.json({
    success: true,
    message: "Task Updated Successfully",
    task,
  });
};

// *deleteTask
export const deleteTask = async (req, res, next) => {
  const task = await taskModel.findByIdAndDelete(req.params.taskId);
  if (!task) return next(new Error("Task not found", { cause: 404 }));

  return res.json({
    success: true,
    message: "Task Deleted Successfully",
  });
};
