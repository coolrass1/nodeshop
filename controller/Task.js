const Task= require('../Models/Task')


exports.getTasks=async (req,res)=>{

    try {
        const data= await Task.find()
        res.status(201).json({data})
    } catch (error) {
        console.log(error)
        
    }
}


exports.createTask=async (req,res)=>{

    try {
        const data= await Task.create(req.body)
        res.status(201).json({data})
    } catch (error) {
        console.log(error)
        
    }
}


exports.getOneTask=async (req,res)=>{
    const id= req.params.id
        try {
            const data= await Task.findById(id)
            res.status(201).json({data})
        } catch (error) {
            console.log(error)
            
        }
    }

exports.updateTask=async (req,res)=>{
const id= req.params.id
    try {
        const data= await Task.findByIdAndUpdate(id, req.body,{
            new: true,
          })
        res.status(201).json({data})
    } catch (error) {
        console.log(error)
        
    }
}


exports.deleteTask=async (req,res)=>{
    const id= req.params.id
        try {
            const data= await Task.findByIdAndDelete(id)
            res.status(201).json({data:`deleted ${data}`})
        } catch (error) {
            console.log(error)
            
        }
    }