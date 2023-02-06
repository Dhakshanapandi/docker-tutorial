import users from "../Models/studentSchema.js"


export const createStudent = async(req,res)=>{
    const data = new users({
        Name:req.body.Name,
        Course:req.body.Course,
        Email:req.body.Email,
        Fees:req.body.Fees,
        Contact:req.body.Contact
 })
    await data.save()
    res.status(200).json(data) 
}

export const getStudent = async(req,res)=>{
    const getall =await  users.find();
    res.status(200).json(getall)
}

export const updateStudent = async(req,res)=>{  
    const update = await users.findByIdAndUpdate({_id:req.body._id},{
        $set:{
            Name:req.body.Name,
            Course:req.body.Course,
            Email:req.body.Email,
            Fees:req.body.Fees,
            Contact:req.body.Contact
        }
    },{new:true})
    res.status(200).json(update) 
}
 
export const delStudent = async(req,res)=>{
    await users.findByIdAndDelete(req.params.id)
    res.status(200).json("Student deleted Successfully")
}
