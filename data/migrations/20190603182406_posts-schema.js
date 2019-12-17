exports.up = (knex) => {
  return knex.schema.createTable("posts", (posts) => {
    posts.increments()
    posts.string("title", 1024).notNullable()
    posts.text("contents").notNullable()
    posts.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("posts")
}
