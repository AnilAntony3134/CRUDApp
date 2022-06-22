const express = require('express')
const controller = require('../controller/controller')
const services = require('../services/render')
 
const route = express.Router()

route.get('/',services.homeRoutes)
route.get('/adduser',services.add_user)
route.get('/updateuser',services.update_user)
route.post('/api/users',controller.create)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)
route.get('/api/users',controller.find)


module.exports = route