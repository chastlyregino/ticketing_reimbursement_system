const express = require(`express`)
const { logger } = require(`./util/logger.js`)
const userService = require(`./service/userService.js`)
const userDAO = require(`./repository/userDAO.js`)
const loginController = require(`./controller/loginController.js`)
const registerController = require(`./controller/registerController.js`)


const app = express()
const PORT = 3000

//let user = userService.getUsers()
//logger.info(`this is how to use logger`)
const loggerMiddleware = (req, res, next) => {
    logger.info(`Incoming ${req.method} : ${req.url}`)
    next()
}

app.use(loggerMiddleware)
app.use(express.json())

app.use(`/register`, registerController)
app.use(`/login`, loginController)

//POST ticket submission

//GET previous tickets (employee)

//GET pending tickets (manager)

//PUT approve/deny ticket

app.listen(PORT, () => {
    logger.info(`Server is listening on http://localhost:${PORT}`)
})
