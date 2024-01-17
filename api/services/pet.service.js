const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

function normalizeData(data) {
  for (let key in data) {
    if (typeof data[key] === 'string') {
      data[key] = data[key].toLowerCase();
    }
  }
}

class PetsService {
  async create(data) {
    normalizeData(data);
    
    if (data.name) {
      data.name = data.name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
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
