// routes/User.js
const express = require('express');
const { Signup, getAllUsers, getUserById, login, deleteUser } = require('../controller/User');

const router = express.Router();

router.post('/signup', Signup); // Changed to lowercase 's'
router.post('/login', login);
router.get('/all', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

module.exports = router;
