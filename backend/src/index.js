import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'
import { app, server, io } from './lib/socket.js'
import cors from 'cors'
import path from 'path'

dotenv.config()
const PORT = process.env.PORT
const __dirname = path.resolve()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "https://fullstack-chatapp-react-and-node-js.vercel.app",
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

server.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
    connectDB()
})
