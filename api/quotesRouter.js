const router = require("express").Router();

const Quote = require('./quotesModel')

router.post('/quotes', (req, res, next) => {
    const { quote_text, author } = req.body

    Quote.insert({quote_text, author})
    .then(newQuote => {
        res.status(201).json({
            quote_text: newQuote.quote_text,
            author: newQuote.author
        })
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
    Quote.getAll()
    .then(quotes => {
        res.json(quotes)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Quote.getById(req.params.id)
    .then(quote => {
        res.json(quote)
    })
    .catch(next)
})

router.delete('/', (req, res, next) => {
    Quote.remove(req.params.id)
    .then(quote => {
        res.json('quote removed')
    })
    .catch(next)
})

module.exports = router