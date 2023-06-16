const bcrypt = require("bcrypt");
const createError = require("http-errors")
const User = require("../models/user.model");
const jwt = require("../lib/jwt.lib");
/**
 * Registro -> Autenticacion
 * 
 */


const login = async (email, textPlainPassword) => {
  // Validar que un usuario con ese correo exista
  const user = await User.findOne({ email });
  console.log("Si existe un user con ese correo -->", user);
  /**
   * 404 ---> no va
   * 403 ---> no va
   * 401 --->
   * 400 --->
   */
  // Falla correo
  if(!user) throw createError(401, "Invalid data");

  // Vemos si es la password
  const isValidPassword = await bcrypt.compare(textPlainPassword, user.password);
  if(!isValidPassword) throw createError(401, "Invalid data");

  // Si es la password y si es el correo regresamos token
  const token = jwt.sign({ email: user.email, id: user._id })
  return token;
}

const create = async (data) => {
  // Cadenas aleatorias, entre mas mas seguro pero mas se tarda
  const saltRounds = 10;

  // Hashear la password
  const hashedPassword = await bcrypt.hash(data.password, saltRounds)

  // Cambiar la password en texto plano de la data a la que esta hasheada
  data.password = hashedPassword;

  // Crear el usuario con la password hasheada
  const user = await User.create(data);
  return user
} 

const list = (filters) => {
  const users = User.find(filters);
  return users;
}

const get = async (id) => {
  const user = await User.findById(id);
  if(!user) throw createError(404, "User with that id not found");
  return user;
}
module.exports = { create, login, list, get }
