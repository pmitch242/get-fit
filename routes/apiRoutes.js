const router = require("express").Router();
const path = require("path");

// models
// const models = require("../models/index.js");

// html routes
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

// api routes

module.exports = router;