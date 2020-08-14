const db = require('../dbConfig.js');

module.exports = {
  find,
  add
};
  
function find() {
  return db("tasks");
}

function add(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => get(id));
}