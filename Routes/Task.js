const express = require('express');
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyAdmin,
} = require('../middleware/auth');

const {
  getTasks,
  createTask,
  updateTask,
  getOneTask,
  deleteTask,
} = require('../controller/Task');
router.get('/', verifyToken, getTasks);
router.post('/', createTask);
router.get('/:id', getOneTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
