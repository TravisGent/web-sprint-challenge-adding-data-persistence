exports.up = function(knex) {
    return knex.schema.createTable("projects", function(projects) {
      projects.increments();
  
      projects.string("name", 128).notNullable();
      projects.string("description", 128);
      projects.boolean("completed").notNullable().defaultTo(false);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects");
  };