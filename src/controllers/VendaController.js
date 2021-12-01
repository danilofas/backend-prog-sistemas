const conexao = require('../database/connection');
const { buscar } = require('./ClienteController');

module.exports = {

    async cadastrar(request, response) {
        const { id_cliente, id_produto } = request.body;

        await conexao('vendas').insert({
            id_cliente: id_cliente,
            id_produto: id_produto
        })

        return response.status(204).json("Venda cadastrada.");
    },

    async buscar(request, response) {
        const { id } = request.params

        const resultadoBusca = await conexao('vendas')
            .join('clientes', 'vendas.id_cliente', 'clientes.id')
            .join('produtos', 'vendas.id_produto', 'produtos.id')
            .where('vendas.id', id)
            .select('vendas.id as Código venda',
                'clientes.nome as Nome',
                'clientes.sobrenome as Sobrenome',
                'clientes.cpf as CPF',
                'produtos.nome as Nome produto',
                'produtos.categoria as Categoria',
                'produtos.preco as Preço',
                'produtos.estoque as Estoque',
                'produtos.unidade as Unidade',
                'produtos.marca as Marca',
                'produtos.descricao as Descrição',
            );

        return response.json(resultadoBusca)
    },

    async listar(request, response) {
        const resultadoBusca = await conexao('vendas').select('*');
        return response.json(resultadoBusca);
    },

    async apagar(request, response) {
        const { id } = request.params

        try {
            const numeroLinhas = await conexao('vendas').where('id', id).del();

            if (numeroLinhas > 0) {
                return response.status(202).json({
                    "mensagem": "Venda foi excluída",
                    "qtdLinhas": numeroLinhas
                })
            } else {
                return response.status(406).json({
                    "mensagem": "Registros não encontrados no banco de dados",
                    "qtdLinhas": numeroLinhas
                })
            }

        } catch (error) {
            return response.send(406).json(error)
        }
    }
}