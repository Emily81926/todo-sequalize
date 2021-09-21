//引入express 及express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')

router.use('/users', users)
router.use('/todos', todos)
router.use('/', home)


//匯出路由
module.exports = router


