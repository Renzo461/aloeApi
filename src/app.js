const express = require('express')
const actuador = require('./routes/actuador')
const actuadorestacion = require('./routes/actuadorestacion')
const eca = require('./routes/eca')
const estacionbase = require('./routes/estacionbase')
const estado = require('./routes/estado')
const fabrica = require('./routes/fabrica')
const modeloestacion = require('./routes/modeloestacion')
const nivelbateria = require('./routes/nivelbateria')
const nodo = require('./routes/nodo')
const placa = require('./routes/placa')
const proyectoconstruccion = require('./routes/proyectoconstruccion')
const reporteincidente = require('./routes/reporteincidente')
const tipoactuador = require('./routes/tipoactuador')
const tipoeca = require('./routes/tipoeca')
const tipousuario = require('./routes/tipousuario')
const usuario = require('./routes/usuario')

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

app.listen(PORT, () => {
  console.log(`Server runnig at port ${PORT}`)
})
app.get("/tipoeca", (req, res) => {
  knex.from("tipoeca").select("*")
    .then(r => res.json(r))
})
app.get("/tipoeca/:id", (req, res) => {
  const id = req.params.id;
  knex.from("tipoeca").select("*").where('id', id)
    .then(r => res.json(r))
})
app.get("/eca", (req, res) => {
  knex.from("eca").select("*")
    .then(r => res.json(r))
})
app.get("/eca/:id", (req, res) => {
  const id = req.params.id;
  knex.from("eca").select("*").where('id', id)
    .then(r => res.json(r))
})
app.get("/fabrica", (req, res) => {
  knex.from("fabrica").select("*")
    .then(r => res.json(r))
})
app.get("/fabrica/:ruc", (req, res) => {
  const id = req.params.id;
  knex.from("fabrica").select("*").where('id', id)
    .then(r => res.json(r))
})
app.get("/tipousuario", (req, res) => {
  knex.from("tipousuario").select("*")
    .then(r => res.json(r))
})
app.get("/tipousuario/:id", (req, res) => {
  const id = req.params.id;
  knex.from("tipousuario").select("*").where('id', id)
    .then(r => res.json(r))
})
app.get("/usuario", (req, res) => {
  knex.from("usuario").select("*")
    .then(r => res.json(r))
})
app.get("/usuario/:dni", (req, res) => {
  const id = req.params.id;
  knex.from("usuario").select("*").where('id', id)
    .then(r => res.json(r))
})
app.get("/reporteincidentes", (req, res) => {
  knex.from("reporteincidentes").select("*")
    .then(r => res.json(r))
})
app.get("/reporteincidentes/:id", (req, res) => {
  const id = req.params.id;
  knex.from("reporteincidentes").select("*").where('id', id)
    .then(r => res.json(r))
})


// app.post("/", (req, res) => {
//   const id = req.body;
//   knex("estacionBase").insert({

//   })
//     .then(r => res.json(r))
// })
app.use('/actuador', actuador)
app.use('/actuadorestacion', actuadorestacion)
app.use('/eca', eca)
app.use('/estacionbase', estacionbase)
app.use('/estado', estado)
app.use('/fabrica', fabrica)
app.use('/modeloestacion', modeloestacion)
app.use('/nivelbateria', nivelbateria)
app.use('/nodo', nodo)
app.use('/placa', placa)
app.use('/proyectoconstruccion', proyectoconstruccion)
app.use('/reporteincidente', reporteincidente)
app.use('/tipoactuador', tipoactuador)
app.use('/tipoeca', tipoeca)
app.use('/tipousuario', tipousuario)
app.use('/usuario', usuario)
