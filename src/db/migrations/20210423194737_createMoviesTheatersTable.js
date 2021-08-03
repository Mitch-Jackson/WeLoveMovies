exports.up = function (knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.integer("movie_id").references("movies.movie_id")
    table.integer("theater_id").references("theaters.theater_id")
    table.boolean("is_showing")
    table.timestamps(false, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("theaters")
}
