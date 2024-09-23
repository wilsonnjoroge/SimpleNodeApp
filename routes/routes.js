const { logIn } = require('../app/controller/login');
const { registerUsers } = require('../app/controller/user_registration');

const router = require('express').Router();


router.post('/add-user', registerUsers)
router.post('/login', logIn)

module.exports = router;
