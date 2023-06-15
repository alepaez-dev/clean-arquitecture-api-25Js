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
  // Traerme al mentor al que le voy a hacer la modificacion
  const mentor = await Mentor.findById({ _id: id })
  
  // Si me mandas generacion ----> Hazme la logica de las generaciones
  if(data?.generation) {
    // Hago todas mis generaciones falsas
    let newGenerations = mentor.generations.map(generation => {
      return {
        name: generation.name,
        isActive: false // Cualquier generacion que estaba ACTIVA ya no lo va a estar
      }
    });
    // Agrego mi nueva generacion que me manda el cliente como activa
    //@ts-ignore
    newGenerations.push({
      name: data.generation.name,
      isActive: true
    });

    // A mi mentor le agrego sus NUEVAS GENERACIONES
    data["generations"] = newGenerations;
    
  }

  // Actualizar a la base de datos
  const updatedMentor = await Mentor.findByIdAndUpdate(id, data, { returnDocument: "after" })

  // Regresarlo
  return updatedMentor;
}

module.exports = { create, list, update }