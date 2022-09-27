import http from 'http'
import fs from 'fs'

const sendFile = (path, response) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Da hat etwas nicht geklappt")
            return
        }
        const html = data.toString()
        response.writeHead(200)
        response.write(html)
        response.end()
    })
}

const server = http.createServer((req, res) => {
    console.log('Da kommt ein neuer Request:', req.method, req.url);

    if (req.url === '/') {
        sendFile('./assets/html/home.html', res)
    }
    else if (req.url === '/about') {
        sendFile('./assets/html/about.html', res)
    } else if (req.url === '/faq') {
        sendFile('./assets/html/faq.html', res)
    } else if (req.url === '/contact') {
        sendFile('./assets/html/contact.html', res)
    }
    else {
        sendFile('./assets/html/error.html', res)
    }
})

server.listen(9898, () => console.log('Server runs on Port 9898'))