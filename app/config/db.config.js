module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "cinema_admin",
  PASSWORD: process.env.DB_PASSWORD || "123456",
  DB: process.env.DB_NAME || "online_cinema_db",
  dialect: "postgres",
  port: process.env.DB_PORT || 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
