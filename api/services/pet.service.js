const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PetsService {
  async create(data) {
    if (data.name)
      data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    if (data.sex) data.sex = data.sex.toLowerCase();

    if (data.type) data.type = data.type.toLowerCase();

    if (data.state) data.state = data.state.toLowerCase();

    const newPet = await models.Pet.create(data);

    return newPet
  }

  async find() {
    const rta = await models.Pet.findAll();

    return rta;
  }

  async findOne(id) {
    const pet = await models.Pet.findByPk(id);

    if (!pet)
      throw boom.notFound('Pet not found');

    return pet;
  }

  async update(id, changes) {
    const pet = await this.findOne(id);
    const rta = await pet.update(changes);

    return rta;
  }

  async delete(id) {
    const pet = await this.findOne(id);
    await pet.destroy();

    return { id };
  }

}

module.exports = PetsService;
