const express = require('express')
const { connection } = require('./conexion.js')
const knex = require('knex')(connection)
// const games = require('./routes/games')
// const cart = require('./routes/cart')

const app = express()
const PORT = 4040

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
// app.use('/api/games', games)
// app.use('/api/cart', cart)
app.listen(PORT, () => {
  console.log(`Server runnig at port ${PORT}`)
})
app.get("/", (req, res) => {
  knex.from("estacionBase").select("*")
    .then(r => res.json(r))
})
app.get("/:id", (req, res) => {
  const id = req.params.id;
  knex.from("estacionBase").select("*").where('ebId', id)
    .then(r => res.json(r))
})

// app.post("/", (req, res) => {
//   const id = req.body;
//   knex("estacionBase").insert({

//   })
//     .then(r => res.json(r))
// })
