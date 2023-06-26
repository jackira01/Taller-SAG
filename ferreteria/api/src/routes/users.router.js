const { Router } = require('express');
const { userLogin } = require('../controllers/users/get.user');

const router = Router();

router.post('/', userLogin);

module.exports = router;
