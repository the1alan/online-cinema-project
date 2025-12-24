module.exports = (sequelize, DataTypes) => {
  const View = sequelize.define("view", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    view_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    duration_watched: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    device_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'views',
    timestamps: true,
    underscored: true
  });

  return View;
};
