const db = require('../dbConfig.js');

module.exports = {
  find,
  add
};
  
function find() {
  return db("projects");
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => get(id));
}