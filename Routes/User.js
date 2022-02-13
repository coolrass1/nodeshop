const express = require('express');
const router = express.Router();

const { Register, SignIn } = require('../controller/User');
router.post('/register', Register);
router.post('/signin', SignIn);
//router.get('/:id', getOneUser )
//router.put('/:id', updateUser )
//router.delete('/:id', deleteUser )

module.exports = router;
