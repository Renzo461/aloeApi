const express = require('express')
// const { readGames, readGameBydni, updateGame, createGame, deleteGame } = require('../services/gamesServices')
// const newGameEntry = require('../utils')
const router = express.Router()
const { connection } = require('../conexion.js')
const knex = require('knex')(connection)


router.get('/', (req, res) => {
    knex.from("usuario").select("*")
        .then(r => res.json(r))
})

router.get('/:dni', (req, res) => {
    const dni = req.params.dni;
    knex.from("usuario").select("*").where('dni', dni)
        .then(r => res.json(r))
})

router.post('/', (req, res) => {
    try {
        const data = req.body
        knex("usuario")
            .insert(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.put('/:dni', (req, res) => {
    const dni = req.params.dni
    try {
        const data = req.body
        knex("usuario")
            .where("dni", dni)
            .update(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.delete('/:dni', (req, res) => {
    const dni = req.params.dni
    try {
        knex("usuario")
            .where("dni", dni)
            .del()
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports = router