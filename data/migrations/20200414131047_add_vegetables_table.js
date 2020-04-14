
exports.up = function(knex) {
    return knex.schema.createTable('veggies', tbl => {
        // a primary key, called id that autoincrements
        tbl.increments('id');

        tbl.string('name', 255)
            .notNullable()
            .unique()
            .index();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('veggies');
};

// knex migrate: make add_veggies_table
// delete the database file
// knex migrate:latest
// knex migrate:rollback to undo changes