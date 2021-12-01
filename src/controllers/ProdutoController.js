const conexao = require('../database/connection');

module.exports = {

    async cadastrar(request, response) {
        const { nome, categoria, preco, estoque, unidade, marca, descricao } = request.body
        await conexao('produtos').insert({
            nome,
            categoria,
            preco,
            estoque,
            unidade,
            marca,
            descricao
        });

        return response.status(201).send()
    },

    async listar(request, response) {
        const resultadoBusca = await conexao('produtos').select('*');
        return response.json(resultadoBusca);
    },

    async atualizar(request, response) {
        const { id } = request.params
        const {
            nome,
            categoria,
            preco,
            estoque,
            unidade,
            marca,
            descricao,
            foto
        } = request.body

        await conexao('produtos')
            .where('id', id)
            .update({
                nome: nome,
                categoria: categoria,
                preco: preco,
                estoque: estoque,
                unidade: unidade,
                marca: marca,
                descricao: descricao,
                foto: foto
            });

        return response.json("Dados atualizados com sucesso.")
    },

    async buscar(request, response) {
        const { id } = request.params
        const resultadoBusca = await conexao('produtos').select('*').where('id', id);
        return response.json(resultadoBusca);
    },

    async apagar(request, response) {
        const { id } = request.params
        await conexao('produtos').where('id', id).delete();
        return response.status(204).send()
    },


}