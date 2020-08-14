
exports.up = function(knex) {
  return knex.schema.createTable("tasks", function(tasks) {
    tasks.increments();

    tasks
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tasks.text("description").notNullable();
    tasks.text("notes").notNullable();
    tasks.boolean("completed").notNullable().defaultTo(false);
  })
  .createTable("project", tbl => {
    tbl.increments();
    tbl
      .string("project_name")
      .unsigned()
      .notNullable()
      .references("name")
      .inTable("projects")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .string("project_description")
      .unsigned()
      .notNullable()
      .references("description")
      .inTable("projects")
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project")
    .dropTableIfExists("tasks");
};
