const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4} = require('uuid');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4()
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'https://drive.google.com/file/d/1Jf5a8RyRdZSOZxNkyGDaILXn9WzerKJ7/view?usp=sharing'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
    defaultValue: '-'
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'transito'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    };
  }
};

module.exports = {
  USER_TABLE,
  UserSchema,
  User
};
