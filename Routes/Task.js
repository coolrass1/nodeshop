
const express= require("express")
const router =express.Router()

const { getTasks, createTask,updateTask,getOneTask,deleteTask } = require("../controller/Task")
router.get('/', getTasks)
router.post('/', createTask)
router.get('/:id', getOneTask )
router.put('/:id', updateTask )
router.delete('/:id', deleteTask )

module.exports=router