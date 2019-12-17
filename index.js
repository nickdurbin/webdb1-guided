const express = require("express")
const postRouter = require("./posts/post-router")

const server = express()
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 4000

server.use(express.json())
server.use("/api/posts", postRouter)

server.get("/", (req, res) => {
  res.json({ message: "DB Helpers with Knex" })
})

server.listen(port, () => {
  console.log(`Listening on http://${host}:${port}`)
})
