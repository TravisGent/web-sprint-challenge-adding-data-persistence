
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
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
