const express = require('express');
const router = express.Router();
const menuCtrl = require('../controllers/menuController');

router.get('/', menuCtrl.obtenerMenu);
router.post('/', menuCtrl.agregarItem);
router.put('/:id', menuCtrl.actualizarItem);
router.delete('/:id', menuCtrl.eliminarItem);

module.exports = router;
