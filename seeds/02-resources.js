
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          project_id: 1, 
          name: 'The Ashbringer',
          description: "A powerful sword named for its ability to slaughter the undead and leave nothing but ash in its wake."
        },
        {
          project_id: 1, 
          name: 'Thunderfury, Blessed Blade of the Windseeker',
          description: "Weapon that can be used to destroy the Lich King"
        },
        {
          project_id: 2, 
          name: "The Master Sword",
          description: "The Legendary Sword, the Blade of Evil's bane. It must be weilded by Link, the hero that will seal the darkness!"
        },
        {
          project_id: 2, 
          name: 'Light Arrows',
          description: "Arrows with sacred light that can easily pierce and destroy evil itself."
        },
      ]);
    });
};
