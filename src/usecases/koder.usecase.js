
const Koder = require("../models/koder.model");
/**
 * Crear
 * Actualizar
 * Obtener
 * Enlistar
 * Eliminar
 * 
 * method -> create
 * await Model.create(bfsdhjkb)
 * await Model.findById(bfsdhjkb)
 * * await Model.findByIdAndUpdate(bfsdhjkb)
 * 
 * src/
 *    models/
 *      koder.model.js
 *    usecases/
 *      koder.usecase.js ---> AQUIIIII
 * ../
 * 
 * Funciones
 */

// Enlistar koders;
const list = () => {
  // Accion -> use case;
  const koders = Koder.find();
  return koders;
}

const getbyId = (id) => {
  const koder = Koder.findById(id) // promesa
  return koder;
}

const create = (data) => {
  const koder = Koder.create(data);
  return koder
}

module.exports = { list, getbyId, create }

// Crear koder
// Actualizar koder
// Eliminar koder