const express = require('express')
// const { readGames, readGameById, updateGame, createGame, deleteGame } = require('../services/gamesServices')
// const newGameEntry = require('../utils')
const router = express.Router()
const { connection } = require('../conexion.js')
const knex = require('knex')(connection)


router.get('/', (req, res) => {
    knex.from("actuador").select("*")
        .then(r => res.json(r))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    knex.from("actuador").select("*").where('id', id)
        .then(r => res.json(r))
})

router.post('/', (req, res) => {
    try {
        const data = req.body
        knex("actuador")
            .insert(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    try {
        const data = req.body
        knex("actuador")
            .where("id", id)
            .update(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    try {
        knex("actuador")
            .where("id", id)
            .del()
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports = router