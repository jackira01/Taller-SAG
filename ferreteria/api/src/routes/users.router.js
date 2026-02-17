const { Router } = require('express');
const { userLogin } = require('../controllers/users/get.user');
const { userRegister } = require('../controllers/users/post.user');

const router = Router();

router.post('/login', userLogin);
router.post('/register', userRegister);

module.exports = router;

