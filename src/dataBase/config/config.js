module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST ,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_DATABASE || "database_production",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username":process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_DATABASE || "database_production",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql"
  }
}
