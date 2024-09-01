const { Sequelize, DataTypes } = require('sequelize');

const Spacecraft = sequelize.define('Spacecraft', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING,
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
  currentLocation: {
    type: DataTypes.STRING,
  },
  upcomingJourneys: {
    type: DataTypes.JSON,
  },
  // ... other attributes as needed
});

module.exports = Spacecraft;