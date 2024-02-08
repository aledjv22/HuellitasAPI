const express = require('express');
const passport = require('passport');

const PetsService = require('../services/pet.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPetSchema,
        updatePetSchema,
        getPetSchema,
        deletePetSchema
      } = require('../schemas/pet.schema');

const router = express.Router();
const service = new PetsService();

router.get('/',
  async  (req, res) => {
    const pets = await service.find();

    res.json(pets);
  }
);

router.get('/:id',
  validatorHandler(getPetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const pet = await service.findOne(id);

      res.status(200).json(pet);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createPetSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPet = await service.create(body);

      res.status(201).json(newPet);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getPetSchema, 'params'),
  validatorHandler(updatePetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const pet = await service.update(id, body);

      res.json(pet);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(deletePetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);

      res.json(rta);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
