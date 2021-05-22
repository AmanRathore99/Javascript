const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderdetails', {
    orderDetailRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderDetailId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "orderDetailId"
    },
    billDate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    quantity: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    orderRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'orderRowId'
      }
    },
    paymentRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'paymentRowId'
      }
    },
    productRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'productRowId'
      }
    }
  }, {
    sequelize,
    tableName: 'orderdetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderDetailRowId" },
        ]
      },
      {
        name: "orderDetailId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderDetailId" },
        ]
      },
      {
        name: "fk_orderRowId_in_orderDetails_table",
        using: "BTREE",
        fields: [
          { name: "orderRowId" },
        ]
      },
      {
        name: "fk_paymentRowId_in_orderDetails_table",
        using: "BTREE",
        fields: [
          { name: "paymentRowId" },
        ]
      },
      {
        name: "fk_productRowId_in_orderDetails_table",
        using: "BTREE",
        fields: [
          { name: "productRowId" },
        ]
      },
    ]
  });
};
