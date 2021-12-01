const express = require("express");
const routes = express.Router();
const clienteController = require('./controllers/ClienteController')
const produtoController = require('./controllers/ProdutoController');
const vendaController = require("./controllers/VendaController");

//rotas de cliente
routes.post('/cliente/cadastro', clienteController.cadastrar)
routes.get('/cliente/listar', clienteController.listar)
routes.get('/cliente/busca/:id', clienteController.buscar)
routes.put('/cliente/atualizar/:id', clienteController.atualizar)
routes.delete('/cliente/apagar/:id', clienteController.apagar)

//rotas de produtos
routes.post('/produto/cadastro', produtoController.cadastrar)
routes.get('/produto/listar', produtoController.listar)
routes.put('/produto/atualizar/:id', produtoController.atualizar)
routes.get('/produto/busca/:id', produtoController.buscar)
routes.delete('/produto/apagar/:id', produtoController.apagar)

//rotas de vendas

routes.post('/venda/cadastro', vendaController.cadastrar)
routes.get('/venda/busca/:id', vendaController.buscar)
routes.get('/venda/listar', vendaController.listar)
routes.delete('/venda/apagar/:id', vendaController.apagar)

module.exports = routes;



//PUT: atualizar informações
//DELETE: apagar informações
//GET: buscar informações
//POST: enviar informações

//Query params: parametros de busca -> utilizados para fazer buscar, filtros, paginação
//Route params: parametros de rota -> utilizados para identificação, busca especifica, apagar registros, etc
//Body params: parametros do corpo -> utilizados para passar dados para cadastro, atualização, etc.