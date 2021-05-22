const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendor', {
    vendorRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendorId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "vendorId"
    },
    vendorName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    vendorPhone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vendorAddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vendorRowId" },
        ]
      },
      {
        name: "vendorId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vendorId" },
        ]
      },
    ]
  });
};
