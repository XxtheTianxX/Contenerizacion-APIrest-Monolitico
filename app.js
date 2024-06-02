const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

const { mongoConn } = require('./databases/configuration')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

mongoConn()

const tipoProyectos = require('./routes/tipoProyecto')
const clientes = require('./routes/cliente')


// middlewares
app.use('/api/tiposproyectos', tipoProyectos)
app.use('/api/clientes', clientes)


module.exports = app