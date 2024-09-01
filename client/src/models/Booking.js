const { Sequelize, DataTypes } = require('sequelize');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  spacecraftId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Spacecraft',
      key: 'id',
    },
  },
  journeyDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // ... other booking details
});

module.exports = Booking;