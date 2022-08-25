require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect((error) => {
    if(error) throw error;
    console.log('Conexion exitoso');
})

app.listen( port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
})