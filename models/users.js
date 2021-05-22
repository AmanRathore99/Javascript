const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    usersId: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "usersId"
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    loginRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'logininfo',
        key: 'loginRowId'
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "usersId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usersId" },
        ]
      },
      {
        name: "fk_loginRowId_in_loginInfo_table",
        using: "BTREE",
        fields: [
          { name: "loginRowId" },
        ]
      },
    ]
  });
};
