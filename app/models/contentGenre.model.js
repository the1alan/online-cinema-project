module.exports = (sequelize, DataTypes) => {
  const ContentGenre = sequelize.define("content_genre", {
    content_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: 'content_genres',
    timestamps: false,
    underscored: true
  });

  return ContentGenre;
};
