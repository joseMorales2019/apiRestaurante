const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  categoria: String,
  disponible: { type: Boolean, default: true }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
