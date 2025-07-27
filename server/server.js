import express, { json } from 'express'
import cors from 'cors'
import connectDB from './configs/db.js'
import 'dotenv/config'
import adminRouter from './routes/adminRoutes.js'
import eventRouter from './routes/eventRoutes.js'
import contentRouter from './routes/contentRoutes.js'

const app = express()

// Connect to DB
await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/',(req,res)=> res.send("API is working"));
app.use('/api/admin', adminRouter)
app.use('/api/event', eventRouter)
app.use('/api/content', contentRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is running on PORT:', PORT);
})

export default app
