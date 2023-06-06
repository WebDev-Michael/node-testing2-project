const server = require ('./api/server')
const PORT = 9000

server.listen(9000, () => {
    console.log(`Port listening on port ${PORT}`)
})