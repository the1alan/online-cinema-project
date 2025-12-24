module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define("content", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 200]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1888, // первый фильм
        max: new Date().getFullYear() + 5
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Длительность в минутах',
      validate: {
        min: 1
      }
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
      validate: {
        min: 0,
        max: 10
      }
    },
    poster_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'contents',
    timestamps: true,
    underscored: true
  });

  return Content;
};

