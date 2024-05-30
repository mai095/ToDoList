import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connection/connection.js";
import allRoutes from "./routes.js";
dotenv.config();
connectDB();
const port = process.env.PORT;
const app = express();
app.use(express.json());
allRoutes(app);

// &Error handler
app.use("*", (req, res, next) => {
  return next(new Error("URL not found", { cause: 404 }));
});
// &Global error handler
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message,
    stack: error.stack,
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
