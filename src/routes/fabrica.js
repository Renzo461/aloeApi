const express = require('express')
const router = express.Router()
const { connection } = require('../conexion.js')
const knex = require('knex')(connection)


router.get('/', (req, res) => {
    knex.from("fabrica").select("*")
        .then(r => res.json(r))
})

router.get('/:ruc', (req, res) => {
    const ruc = req.params.ruc;
    knex.from("fabrica").select("*").where('ruc', ruc)
        .then(r => res.json(r))
})

router.post('/', (req, res) => {
    try {
        const data = req.body
        knex("fabrica")
            .insert(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.put('/:ruc', (req, res) => {
    const ruc = req.params.ruc
    try {
        const data = req.body
        knex("fabrica")
            .where("ruc", ruc)
            .update(data)
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.delete('/:ruc', (req, res) => {
    const ruc = req.params.ruc
    try {
        knex("fabrica")
            .where("ruc", ruc)
            .del()
            .then(r => {
                res.json(r)
            })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports = router