const express = require("express")
const db = require("../data/db-config") // database access using knex

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    res.json(await db.select("*").from("posts"))
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const post = await db("posts").where("id", req.params.id).select()
    res.json(post)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const payload = {
      title: req.body.title,
      contents: req.body.contents
    }

    // Destructured id and then returns just the id
    const [id] = await db("posts").insert(payload)
    res.json({ id })
  } catch (err) {
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const payload = {
      title: req.body.title,
      contents: req.body.contents
    }

    // Use this method to return the entire post
    await db("posts").where("id", req.params.id).update(payload)
    res.json(await db("posts").where("id", req.params.id).first())

  } catch (err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    // Doesn't return anything, so we made a response
    await db("posts").where("id", req.params.id).del()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
