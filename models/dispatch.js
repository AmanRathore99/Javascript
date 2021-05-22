const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispatch', {
    dispatchRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dispatchId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "dispatchId"
    },
    dispatchDate: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tracking: {
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
    tableName: 'dispatch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dispatchRowId" },
        ]
      },
      {
        name: "dispatchId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dispatchId" },
        ]
      },
      {
        name: "fk_orderRowId_in_dispatch_table",
        using: "BTREE",
        fields: [
          { name: "orderRowId" },
        ]
      },
      {
        name: "fk_productRowId_in_product_table",
        using: "BTREE",
        fields: [
          { name: "productRowId" },
        ]
      },
    ]
  });
};
