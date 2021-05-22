const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subcategory', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subCategoryId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "subCategoryId"
    },
    subCatName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    categoryId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      references: {
        model: 'category',
        key: 'categoryId'
      }
    }
  }, {
    sequelize,
    tableName: 'subcategory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RowId" },
        ]
      },
      {
        name: "subCategoryId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subCategoryId" },
        ]
      },
      {
        name: "fk_categoryId_in_subCategory_table",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
    ]
  });
};
