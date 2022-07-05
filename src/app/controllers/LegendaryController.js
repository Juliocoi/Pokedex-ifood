const ListLegendariesService = require('../services/ListLegendariesService');
const CreateLegendaryService = require('../services/CreateLegendaryService');
const { response } = require('express');
const UpdateLegendaryService = require('../services/UpdateLegendaryService');
const DeleteLegendaryService = require('../services/DeleteLegendaryService');


const controller = {
  index: (request, response) => {
    const listLegendaries = ListLegendariesService.listLegendariesService()
    response.json(listLegendaries)
  },

  ListData: (request, response) => {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ "Erro": "Você precisa passar um nome válido" });
    }

    const legendary = ListLegendariesService.listPokemonData(name);

    return response.json(legendary)
  },

  create: (request, response) => {

    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    } = request.body;


    const legendary = CreateLegendaryService.createLegendary(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense

    );

    return response.json(legendary)


  },

  update: (request, response) => {
    const { id } = request.params;
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    } = request.body;

    const updateLegendary = UpdateLegendaryService.update(
      id,
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    )

    response.send(updateLegendary)
  },

  delete: (request, response) => {
    const { id } = request.params;
    const resultado = DeleteLegendaryService.delete(id);

    response.send(resultado)
  }


}

module.exports = controller;