const express = require("express")

const app = express()

app.listen('4000', () => (
    console.log('Conexión en el puerto 4000')
))

app.get('/', (req, res) => {
    res.send('prueba mensaje GET')
})

app.get('/api-version', (req, res) => {
    res.send({
        author: "Nicolas Patrignani",
        version: "1.0",
        tech: "Framework Express"
    })
})