
module.exports = {

  development: {
    client: "pg",
    connection: "postgresql://localhost/tech-books-database"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
