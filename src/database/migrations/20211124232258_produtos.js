exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('categoria').notNullable();
        table.float('preco', 9, 2).notNullable();
        table.float('estoque', 8, 2).notNullable();
        table.string('unidade').notNullable();
        table.string('marca').notNullable();
        table.string('descricao').nullable();
        table.string('foto').nullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};