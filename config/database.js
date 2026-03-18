import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = ()=>{
// mongoose.connect('mongodb://127.0.0.1:27017/contact-crud')
mongoose.connect(process.env.MONGO_URL)

.then(()=>console.log("database connected"))
}

