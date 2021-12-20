'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("T_chats", "room_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("T_chats", {
      fields: ["room_id"],
      type: "foreign key",
      name: "rooms_chats_id_fk",
      references: {
        table: "T_rooms",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("T_chats", "room_id");
  }
};
