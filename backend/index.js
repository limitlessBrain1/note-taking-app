import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.route.js'

const app = express()
dotenv.config()
const port = process.env.PORT || 4002

// Database Connection Code
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
    process.exit(1);
  });



// Routing Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp", noteRoutes)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
