
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1, 
          description: "Go to Northrend",
          notes: "We must take boats to Northrend and go to Icecrown Citadel to destroy the Lich King!",
          completed: "false"
        },
        {
          project_id: 1, 
          description: "Ask for help and reinforcments",
          notes: "We need as much help as we can get to destroy the Scourge",
          completed: "false"
        },
        {
          project_id: 2, 
          description: "Find the Master Sword",
          notes: "Link must find the Sword of Evil's Bane in order to destroy Ganon",
          completed: "false"
        },
        {
          project_id: 2, 
          description: "Find all of the Shrines",
          notes: "Link needs as many hearts and stamina containers as he can get to easily defeat ganon.",
          completed: "false"
        },
      ]);
    });
};