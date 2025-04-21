const { hostname } = require('os');
const express = require('express');
const { compute } = require('./functions')
const app = express()

app.get('/healthz', (_req, res) => res.send("Healthy!"))

app.get('/host', (_req, res) => res.send(`Hi from ${hostname}`))

app.get('/get-number', (req, res) => res.send(`The number is: ${compute(req.query.number)}`))

app.listen(3000, () => console.log("Listening on port 3000"))
