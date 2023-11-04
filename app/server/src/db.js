const knex =  require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "654789123",
        database: "crud"
    }
})

module.exports = knex