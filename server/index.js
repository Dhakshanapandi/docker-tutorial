import express from "express"
const app = express();
import mongoose from "mongoose";
import  dotenv from "dotenv"
import route from "./Routes/routes.js"
import morgan from "morgan"
import cors from "cors"
dotenv.config()

//middle wares 
app.use(morgan("dev")) 
app.use(cors())
app.use(express.json())
app.use("/info",route);  

//db connection
mongoose.set('strictQuery', true); 
const connect = async ()=>{ 
    try{

    await mongoose.connect(process.env.MONGO)
    console.log("connected to Mongo");
    }
    catch(err){
        console.log(err);
    }
}
app.listen(5000,() => {
    connect()
    console.log("Server is running"); 
})