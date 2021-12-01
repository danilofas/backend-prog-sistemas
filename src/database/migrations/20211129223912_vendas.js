exports.up = function(knex) {
    return knex.schema.createTable('vendas', function(table) {
        table.increments();

        table.integer('id_cliente').unsigned().notNullable();
        table.foreign('id_cliente').references('id').inTable('clientes');

        table.integer('id_produto').unsigned().notNullable();
        table.foreign('id_produto').references('id').inTable('produtos');

        table.timestamp('data_criacao').defaultTo(knex.fn.now())
        table.timestamp('data_atualizacao').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {

};