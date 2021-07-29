const controller = {
    getById: (req, res) => res.send(`<h3>Vocês está na página do produto de id ${req.params.id} e cor ${req.params.cor}</h3>`)
}

module.exports = controller