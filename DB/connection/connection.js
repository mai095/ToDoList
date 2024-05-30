import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.URL_CONNECTION)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Connection failed", err);
    });
};

export default connectDB