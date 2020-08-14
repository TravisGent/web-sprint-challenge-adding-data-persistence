exports.up = function(knex) {
    return knex.schema.createTable("projectstoresources", function(projectToResource) {
        projectToResource.increments();
      
        projectToResource.integer("resource_id").notNullable();
        projectToResource.integer("project_id").notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projecttoresource");
};
  
