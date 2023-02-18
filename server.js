// server.js
const express = require("express")
const next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get("/media/images/*", (req, res) => {
        // Disallow travelling up in the file tree
        let target = req.originalUrl.replace("..", "")
        return res.sendFile(__dirname + "/public" + target)
    })

    server.all("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
