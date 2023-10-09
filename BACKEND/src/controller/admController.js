import { buscarPorId, listar, remover, salvar, alterar } from "../repository/admRepository.js";

import { Router } from "express";
const endpoints = Router()


endpoints.post('/adm', async (req, resp) => {
    try {
      let adm = req.body;
  
      if (!adm.nome)
        throw new Error('Nome do ADM é obrigatório!');

      if(adm.nome.length>70)
        throw new Error('Nome muito longo');
  
      if (!adm.senha)
        throw new Error('Senha do ADM é obrigatório');

      if(adm.senha.length>70)
        throw new Error('Senha muito longa');
  
      // outras validações
  
      let r = await salvar(adm);
  
      resp.send(r);
    }
    catch (err) {
      resp.status(400).send({
        erro: err.message
      })
    }
  });

  endpoints.put('/adm/:id', async (req, resp) => {
    try {
      let adm = req.body;
      let id = req.params.id;
  
        if (!adm.nome)
        throw new Error('Nome do ADM é obrigatório!');

        if(adm.nome.length>70)
        throw new Error('Nome muito longo');

        if (!adm.senha)
        throw new Error('Senha do ADM é obrigatório');

        if(adm.senha.length>70)
        throw new Error('Senha muito longa');
  
      // outras validações
  
      let r = await alterar(id,adm);
  
      resp.send(r);
    }
    catch (err) {
      resp.status(400).send({
        erro: err.message
      })
    }
  });
  
  
  endpoints.get('/adm', async (req, resp) => {
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
  
  
  
  
  endpoints.get('/adm/:id', async (req, resp) => {
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
  
  
  
  endpoints.delete('/adm/:id', async (req, resp) => {
    try {
      let id = req.params.id;
      let linhasAfetadas = await remover(id);
      
      if (linhasAfetadas == 0)
        throw new Error('ADM não encontrado!');
  
      resp.send();
    }
    catch (err) {
      resp.status(400).send({
        erro: err.message
      })
    }
  })

export default endpoints;