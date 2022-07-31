// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://abdullah:haris123@localhost:5432/cq-tech-test-be-dev',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://abdullah:haris123@localhost:5000/cq-tech-test-be-test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
};