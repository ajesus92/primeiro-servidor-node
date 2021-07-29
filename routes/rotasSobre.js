const express = require('express'),
    router = express.Router()

    router.get('/', (req, res) => res.send('<h3>Vocês está na página sobre</h3>'))

module.exports = router