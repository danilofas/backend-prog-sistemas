exports.up = function(knex) {
    return knex.schema.createTable('clientes', function(table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('cpf').notNullable().unique();
        table.string('sexo', 2).notNullable();
        table.string('endereco').nullable();
        table.string('cidade').nullable();;
        table.string('uf', 2).nullable();;
        table.string('email').notNullable().unique();
        table.string('celular').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};