module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("payment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'credit_card'
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'pending'
    },
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'payments',
    timestamps: true,
    underscored: true
  });

  return Payment;
};
