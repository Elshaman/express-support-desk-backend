const express = require('express')
const router = express.Router()
const {register , login , getMe } = require('../controllers/userController')
const {protect } = require('../middleware/authMiddleware')


router.route('/')
    .post(register)

router.route('/login')
    .post(login)

router.get('/me' , protect,  getMe)


module.exports = router

