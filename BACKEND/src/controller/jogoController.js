import { buscarPorId, listar, remover, salvar, alterar } from "../repository/jogoRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/jogo', async (req, resp) => {
  try {
    let jogo = req.body;

    if (!jogo.nomeJogo)
      throw new Error('Nome do jogo é obrigatório!');

    if (isNaN(jogo.precoJogo) || jogo.precoJogo < 0)
      throw new Error('Preço inválido!');

    // outras validações

    let r = await salvar(jogo);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoints.put('/jogo/:id', async (req, resp) => {
  try {
    let jogo = req.body;
    let id = req.params.id;

    if (!jogo.nomeJogo)
      throw new Error('Nome do jogo é obrigatório!');

    if (isNaN(jogo.precoJogo) || jogo.precoJogo < 0)
      throw new Error('Preço inválido!');

    // outras validações

    let r = await alterar(id,jogo);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});


endpoints.get('/jogo', async (req, resp) => {
  try {
    let r = await listar();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})




endpoints.get('/jogo/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await buscarPorId(id);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})



endpoints.delete('/jogo/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let linhasAfetadas = await remover(id);
    
    if (linhasAfetadas == 0)
      throw new Error('Jogo não encontrado!');

    resp.send();
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoints;