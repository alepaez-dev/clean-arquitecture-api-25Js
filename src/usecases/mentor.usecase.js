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
  let newMentor = mentor

  // Combino data nueva con la que ya esta
  for(let key in data) {
    if(key !== "generation") {
      newMentor[key] = data[key]
    }
  }

  if(data?.generation) {
    // Hago todas mis generaciones falsas
    let newGenerations = newMentor.generations.map(generation => {
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
    // A mi mentor le agrego sus NUEVAS GENERACIONES
    newMentor.generations = newGenerations;
  }

  // Actualizar a la base de datos
  const updatedMentor = await Mentor.findByIdAndUpdate(id, newMentor, { returnDocument: "after" })

  // Regresarlo
  return updatedMentor;
}

module.exports = { create, list, update }