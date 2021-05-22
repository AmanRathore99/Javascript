const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    productRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "productId"
    },
    productName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    productType: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    manufactureRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'manufacture',
        key: 'manufactureRowId'
      }
    },
    categoryId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      references: {
        model: 'category',
        key: 'categoryId'
      }
    },
    vendorRowId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendor',
        key: 'vendorRowId'
      }
    },
    imagePath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    imageName: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productRowId" },
        ]
      },
      {
        name: "productId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },
      {
        name: "fk_manufactureRowId_in_manufacture_table",
        using: "BTREE",
        fields: [
          { name: "manufactureRowId" },
        ]
      },
      {
        name: "categoryId",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "vendorRowId",
        using: "BTREE",
        fields: [
          { name: "vendorRowId" },
        ]
      },
    ]
  });
};
