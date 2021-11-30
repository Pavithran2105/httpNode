const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("hello there")
    }
    if (req.url === "/about") {
        res.end("wazzap")
    } else {
        res.end(`
        <h1>oops<h1>`)
    }
})

server.listen(5000)