const express = require('express');
const spacecraftController = require('../controllers/spacecraftController');

const router = express.Router();

router.get('/', spacecraftController.getAllSpacecraft);
router.get('/:id', spacecraftController.getSpacecraftById);
router.post('/', spacecraftController.createSpacecraft);
router.put('/:id', spacecraftController.updateSpacecraft);
router.delete('/:id', spacecraftController.deleteSpacecraft);

module.exports = router;