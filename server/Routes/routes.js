import express from "express"
const route = express.Router()
import { createStudent, delStudent, getStudent, updateStudent } from "../Controllers/Students.js"
 
//post method
 route.post("/createstudent",createStudent)
//get method
route.get("/get",getStudent)  
// update method 
route.get("/test",(req,res)=>{
 res.send("hello");
}
 )  
 
route.put("/update",updateStudent)
//delete method
route.delete("/delete/:id",delStudent)

export default route;

