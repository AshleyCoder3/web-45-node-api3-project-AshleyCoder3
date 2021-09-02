const server = require('./api/server')
const port = 4000

server.listen(port, () => {
    console.log(`** Server is Running on http://localhost:${port}** `)
})