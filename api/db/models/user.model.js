const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4} = require('uuid');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
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
    defaultValue: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB0eUcVejrD3DIyFcnmlf15P4lrGFUGqkkwqI0g1VYLdYNMdioByR-wfiId72_DqiGs-ygrgR13xHwhLnl7nsLvkCrvIg=w958-h917'
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
