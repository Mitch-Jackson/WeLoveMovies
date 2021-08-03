exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary()
    table.text("content")
    table.integer("score")
    table.integer("critic_id").references("critics.critic_id")
    table.integer("movie_id").references("movies.movie_id")
    table.timestamps(false, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("reviews")
}
