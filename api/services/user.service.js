const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class UsersService {
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    delete newUser.dataValues.recoveryToken;

    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();

    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);

    if (!user)
      throw boom.notFound('User not found');

    delete user.dataValues.recoveryToken;

    return user;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    });

    return rta;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);

    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();

    return { id };
  }

}

module.exports = UsersService;
