module.exports = {
  HOST: "mysql-db",
  USER: "root",
  PASSWORD: "dbuserpwd",
  DB: "boilerplate_db",
  //PORT: "3306",

  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
