const Mentor = require("../models/mentor.model");

const create = (data) => {
  const createdMentor = Mentor.create(data);
  return createdMentor
}

const list = (filters) => {
  const filteredMentors = Mentor.find(filters)
  return filteredMentors;
}

const update = async (id, data) => {
  const mentor = await Mentor.findById({ _id: id })

  if(data?.generation) {
    // Hago todas mis generaciones falsas
    let newGenerations = mentor.generations.map(generation => {
      return {
        name: generation.name,
        isActive: false
      }
    });
    // Agrego mi nueva generacion que me manda el cliente como activa
    //@ts-ignore
    newGenerations.push({
      name: data.generation.name,
      isActive: true
    });

    data["generations"] = newGenerations;
    // A mi mentor le agrego sus NUEVAS GENERACIONES
  }

  // Actualizar a la base de datos
  const updatedMentor = await Mentor.findByIdAndUpdate(id, data, { returnDocument: "after" })

  // Regresarlo
  return updatedMentor;
}

module.exports = { create, list, update }