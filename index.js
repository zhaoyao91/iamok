const http = require('http')

const server = http.createServer((req, res) => {
  res.end()
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

const port = process.env.PORT || 80

server.listen(port)

const stop = () => {
  server.close(() => {
    process.exit()
  })
}

process.on('SIGTERM', stop)
process.on('SIGINT', stop)