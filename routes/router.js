const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const { createUser,getAllUsers,getOneUser,updateOne,deleteOne } = require('../controllers/user');
=======
const { createUser } = require('../controllers/user');
>>>>>>> 09d8f1c62d1096c579bbc4d676289df5ffade697


// User route 
router.post('/user', createUser);
<<<<<<< HEAD
router.get('/user', getAllUsers);
router.get('/user/:id',getOneUser);
router.put('/user/:id',updateOne);
router.delete('/user/:id',deleteOne);
=======


>>>>>>> 09d8f1c62d1096c579bbc4d676289df5ffade697
module.exports = router;