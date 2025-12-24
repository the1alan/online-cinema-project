module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define("subscription", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    duration_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Длительность подписки в днях',
      validate: {
        min: 1
      }
    },
    max_simultaneous_views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: 'Максимальное количество одновременных просмотров'
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'subscriptions',
    timestamps: true,
    underscored: true
  });

  return Subscription;
};

