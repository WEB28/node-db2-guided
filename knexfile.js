// Update with your config settings.
// this file stores configs about how to connect to the database using knex

module.exports = {

  // configures the connection to the database
  development: {
    // the client changes depending on the target DBMS
    client: 'sqlite3', // the database driver
    connection: {
      // the location of the database file
      filename: './data/produce.db3' // for SQLite only
    },
    useNullAsDefault: true, // for SQLite only
    migrations: {
      // where to stare the migration files
      directory:'./data/migrations',
    },
  },

  // configuration used on Heroku
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
