const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4} = require('uuid');

const PET_TABLE = 'pets';

const PetSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: () => uuidv4()
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'En busca de hogar'
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sex: {
    allowNull: false,
    type: DataTypes.STRING
  },
  disability: {
    allowNull: false,
    type: DataTypes.STRING
  },
  breed: {
    allowNull: false,
    type: DataTypes.STRING
  },
  age: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Desconocido'
  },
  castrated: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Desconocido'
  },
  vaccinated: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Desconocido'
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAzTFJxMPZBhaWFZ8A3TYEDeQBCgIsUXmFrrdtYukhwFY718PttfgHeJW3p3bgEaABlP8GginnW4womVGMt4palToZd8w=w411-h917'
  },
  need: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

class Pet extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PET_TABLE,
      modelName: 'Pet',
      timestamps: false
    };
  }
};

module.exports = {
  PET_TABLE,
  PetSchema,
  Pet
};
