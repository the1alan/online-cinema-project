const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// РЕГИСТРАЦИЯ ВСЕХ 7 МОДЕЛЕЙ
db.genres = require("./genre.model.js")(sequelize, Sequelize);
db.contents = require("./content.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.subscriptions = require("./subscription.model.js")(sequelize, Sequelize);
db.views = require("./view.model.js")(sequelize, Sequelize);
db.payments = require("./payment.model.js")(sequelize, Sequelize);
db.contentGenres = require("./contentGenre.model.js")(sequelize, Sequelize);

// ПОДКЛЮЧАЕМ СВЯЗИ
require('./references.model.js')(db);

module.exports = db;

// Подключаем связи между моделями
require('./references.model.js')(db);

module.exports = db;
