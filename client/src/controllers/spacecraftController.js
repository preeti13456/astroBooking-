const Spacecraft = require('../models/Spacecraft');

const getAllSpacecraft = async (req, res) => {
  try {
    const spacecraft = await Spacecraft.findAll();
    res.json(spacecraft);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch spacecraft' });
  }
};

const getSpacecraftById = async (req, res) => {
  try {
    const spacecraft = await Spacecraft.findByPk(req.params.id);
    if (!spacecraft) {
      return res.status(404).json({ error: 'Spacecraft not found' });
    }
    res.json(spacecraft);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch spacecraft' });
  }
};

const createSpacecraft = async (req, res) => {
  try {
    const spacecraft = await Spacecraft.create(req.body);
    res.status(201).json(spacecraft);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create spacecraft' });
  }
};

const updateSpacecraft = async (req, res) => {
  try {
    const spacecraft = await Spacecraft.findByPk(req.params.id);
    if (!spacecraft) {
      return res.status(404).json({ error: 'Spacecraft not found' });
    }
    await spacecraft.update(req.body);
    res.json(spacecraft);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update spacecraft' });
  }
};

const deleteSpacecraft = async (req, res) => {
  try {
    const spacecraft = await Spacecraft.findByPk(req.params.id);
    if (!spacecraft) {
      return res.status(404).json({ error: 'Spacecraft not found' });
    }
    await spacecraft.destroy();
    res.json({ message: 'Spacecraft deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete spacecraft' });
  }
};

module.exports = {
  getAllSpacecraft,
  getSpacecraftById,
  createSpacecraft,
  updateSpacecraft,
  deleteSpacecraft,
};