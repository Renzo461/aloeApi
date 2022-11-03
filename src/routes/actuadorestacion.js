const express = require('express')
// const { readGames, readGameById, updateGame, createGame, deleteGame } = require('../services/gamesServices')
// const newGameEntry = require('../utils')
const router = express.Router()
const { connection } = require('../conexion.js')
const knex = require('knex')(connection)


router.get('/', (req, res) => {
    knex.from("actuadorestacion").select("*")
        .then(r => res.json(r))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    knex.from("actuadorestacion").select("*").where('actuador_id', id).orWhere('estacionbase_id', id)
        .then(r => res.json(r))
})

router.get('/a/:idA&:idE', (req, res) => {
    const idA = req.params.idA;
    const idE = req.params.idE;
    console.log(idA, idE)
    knex.from("actuadorestacion").select("*").where('actuador_id', idA).where('estacionbase_id', idE)
        .then(r => res.json(r))
})

router.post('/', (req, res) => {
    try {
        const data = req.body
        knex("actuadorestacion")
            .insert(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.put('/:idA&:idE', (req, res) => {
    const idA = req.params.idA;
    const idE = req.params.idE;
    try {
        const data = req.body
        knex("actuadorestacion")
            .where("actuador_id", idA)
            .where('estacionbase_id', idE)
            .update(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.delete('/:idA&:idE', (req, res) => {
    const idA = req.params.idA;
    const idE = req.params.idE;
    try {
        knex("actuadorestacion")
            .where("actuador_id", idA)
            .where('estacionbase_id', idE)
            .del()
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports = router