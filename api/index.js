import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'

const PORT = process.env.PORT || 5000;
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("connection successfully");
}
).catch((err)=>{
    console.log(err)
})
const app = express();
app.use('/api/user',userRouter)


app.listen(PORT, () => {
  console.log(`server is running at ${PORT}` );
});
