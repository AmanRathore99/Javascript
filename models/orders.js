const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "orderId"
    },
    orderDate: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    shipDate: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tracker: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    customerRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customerRowId'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderRowId" },
        ]
      },
      {
        name: "orderId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderId" },
        ]
      },
      {
        name: "fk_customerRowId_in_customer_table",
        using: "BTREE",
        fields: [
          { name: "customerRowId" },
        ]
      },
    ]
  });
};
