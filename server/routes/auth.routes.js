const { Router } = require('express')
const router = Router()
const { login, signup } = require('../controllers/auth.controller')

router.post('/admin/login', login)


router.post('/admin/signup', signup)

module.exports = router
