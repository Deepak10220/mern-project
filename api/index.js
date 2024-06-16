import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("connection successfully");
}
).catch((err)=>{
    console.log(err)
})
const app = express();

app.listen(PORT, () => {
  console.log("Server is running on 3000");
});
