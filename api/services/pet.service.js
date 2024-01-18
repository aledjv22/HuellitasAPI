const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PetsService {
  async create(data) {
    const columns = ['name', 'state', 'location', 'sex', 'type', 'size'];

    for (const column of columns) {
      if (data[column]) {
        data[column] = data[column].toLowerCase();
        data[column] = data[column].charAt(0).toUpperCase() + data[column].slice(1);
      }
    }

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
