
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ 
    message: "Добро пожаловать в API онлайн-кинотеатра!",
    author: "Кемалов Алан",
    group: "И-2-24"
  });
});

const db = require("./app/models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("✅ База синхронизирована");
  })
  .catch((err) => {
    console.log("❌ Ошибка: " + err.message);
  });

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Сервер на порту ${PORT}`);
});
