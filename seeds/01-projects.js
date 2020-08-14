
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { 
          name: "Destroy the Lich King",
          description: "We must stop the Lich King before he and the Scourge take over and destroy Azeroth!",
          completed: "false" 
        },
        { 
          name: "Defeat Calamity Ganon",
          description: "Ganon is trapped in Hyrule Castle due to Princess Zelda's power. We must help her and save Hyrule!",
          completed: "false"
        }
      ]);
    });
};
