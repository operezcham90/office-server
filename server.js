const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('cam.html', (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Error')
            return
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(content)
    })
})

server.listen(80, () => {
    console.log('Server is listening')
})