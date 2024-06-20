import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
const app = express();
const PORT = process.env.PORT;
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("connection successfully");
}
).catch((err)=>{
    console.log(err)
})
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter)


app.listen(3000, () => {
  console.log(`server is running at ${3000}` );
});

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error"
  return res.status(statusCode).json({
    success : false,
    statusCode,
    message
  })
})