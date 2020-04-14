// Update with your config settings.

module.exports = {

  // configures the connection to the database
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory:'./data/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
