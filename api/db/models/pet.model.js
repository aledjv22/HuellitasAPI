const { Model, DataTypes, Sequelize } = require('sequelize');
const { v4: uuidv4} = require('uuid');

const { USER_TABLE } = require('./user.model');

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
    type: DataTypes.STRING
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sex: {
    allowNull: false,
    type: DataTypes.STRING
  },
  age: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  size: {
    allowNull: false,
    type: DataTypes.STRING
  },
  main_image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  images: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  views: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'userId',
    allowNull: true,
    type: DataTypes.STRING,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL'
  }
};

class Pet extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }
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
