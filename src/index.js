import mongoose from "mongoose";
import express from "express"
// import { DB_NAME } from "./constants";
// import { connectDB } from "./db";

import dotenv from "dotenv"
import {connectDB} from "./db/index.js"

const app = express()

dotenv.config({
    path: "./env"
})

// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log(`Server is running at ${process.env.PORT}`);
//     })
// })
// .catch((err)=>{
//     console.log("Mongodb connection failed!!!!",err);
// })


















// import express from "express"
// const app = express()

// function connectDb(){}

// connectDb()

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()