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
    defaultValue: 'https://i.ibb.co/sQ2V3vt/particular-Profile.jpg'
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
    defaultValue: 'particular'
  },
  foundation: {
    allowNull: true,
    type: DataTypes.STRING
  },
  location: {
    allowNull: true,
    type: DataTypes.STRING
  },
  alias: {
    allowNull: true,
    type: DataTypes.STRING
  },
  cbuCvu: {
    allowNull: true,
    type: DataTypes.STRING
  },
  urlDonation: {
    allowNull: true,
    type: DataTypes.STRING
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
