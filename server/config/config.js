const dotenv = require('dotenv');

dotenv.config();

const config = {
  development: {
    username: "postgres",
    password: "aremudesannana",
    database: "DatabaseDevelopment",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
    logging:true
  },
  test: {
    username: "postgres",
    password: "aremudesannana",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "postgres",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];

