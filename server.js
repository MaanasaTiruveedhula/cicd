const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end("Hello world, second build happening now!")
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
