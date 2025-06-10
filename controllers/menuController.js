const MenuItem = require('../models/menuItem');

exports.obtenerMenu = async (req, res) => {
  const menu = await MenuItem.find();
  res.json(menu);
};

exports.agregarItem = async (req, res) => {
  const nuevoItem = new MenuItem(req.body);
  const resultado = await nuevoItem.save();
  res.status(201).json(resultado);
};

exports.actualizarItem = async (req, res) => {
  const actualizado = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
};

exports.eliminarItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
