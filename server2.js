const port = 3000

var http = require('http')

const server = http.createServer(function (req, res) {
    console.log("User Connected")
    const ip = res.socket.localAddress; {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('test')
    res.end()
    console.log(`IP Address is ${ip}`)
}
})

server.listen(port, function(error) {
    if (error) {
        console.log("There was an error.")
    } else {
        console.log("Server is listening.")
    }

})

