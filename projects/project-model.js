const db = require('../dbConfig.js');
const mappers = require("../mappers.js");

module.exports = {
  find,
  add,
  findById,
  getProjectActions
};
  
function find() {
  return db("projects");
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => get(id));
}

function findById(id) {
  let query = db("projects as p");

  if (id) {
    query.where("p.id", id).first();

    const promises = [query, getProjectActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [project, actions] = results;

      if (project) {
        project.actions = actions;

        return mappers.projectToBody(project);
      } else {
        return null;
      }
    });
  } else {
    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  }
}

function getProjectActions(projectId) {
  return db("tasks")
    .where("project_id", projectId)
    .then(actions => actions.map(action => mappers.actionToBody(action)));
}