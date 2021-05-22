var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _customer = require("./customer");
var _dispatch = require("./dispatch");
var _manufacture = require("./manufacture");
var _orderdetails = require("./orderdetails");
var _orders = require("./orders");
var _payment = require("./payment");
var _product = require("./product");
var _subcategory = require("./subcategory");
var _userregister = require("./userregister");
var _vendor = require("./vendor");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var dispatch = _dispatch(sequelize, DataTypes);
  var manufacture = _manufacture(sequelize, DataTypes);
  var orderdetails = _orderdetails(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var subcategory = _subcategory(sequelize, DataTypes);
  var userregister = _userregister(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);

  product.belongsTo(category, { as: "category", foreignKey: "categoryId"});
  category.hasMany(product, { as: "products", foreignKey: "categoryId"});
  subcategory.belongsTo(category, { as: "category", foreignKey: "categoryId"});
  category.hasMany(subcategory, { as: "subcategories", foreignKey: "categoryId"});
  orders.belongsTo(customer, { as: "customerRow", foreignKey: "customerRowId"});
  customer.hasMany(orders, { as: "orders", foreignKey: "customerRowId"});
  product.belongsTo(manufacture, { as: "manufactureRow", foreignKey: "manufactureRowId"});
  manufacture.hasMany(product, { as: "products", foreignKey: "manufactureRowId"});
  dispatch.belongsTo(orders, { as: "orderRow", foreignKey: "orderRowId"});
  orders.hasMany(dispatch, { as: "dispatches", foreignKey: "orderRowId"});
  orderdetails.belongsTo(orders, { as: "orderRow", foreignKey: "orderRowId"});
  orders.hasMany(orderdetails, { as: "orderdetails", foreignKey: "orderRowId"});
  payment.belongsTo(orders, { as: "orderRow", foreignKey: "orderRowId"});
  orders.hasMany(payment, { as: "payments", foreignKey: "orderRowId"});
  orderdetails.belongsTo(payment, { as: "paymentRow", foreignKey: "paymentRowId"});
  payment.hasMany(orderdetails, { as: "orderdetails", foreignKey: "paymentRowId"});
  dispatch.belongsTo(product, { as: "productRow", foreignKey: "productRowId"});
  product.hasMany(dispatch, { as: "dispatches", foreignKey: "productRowId"});
  orderdetails.belongsTo(product, { as: "productRow", foreignKey: "productRowId"});
  product.hasMany(orderdetails, { as: "orderdetails", foreignKey: "productRowId"});
  product.belongsTo(vendor, { as: "vendorRow", foreignKey: "vendorRowId"});
  vendor.hasMany(product, { as: "products", foreignKey: "vendorRowId"});

  return {
    category,
    customer,
    dispatch,
    manufacture,
    orderdetails,
    orders,
    payment,
    product,
    subcategory,
    userregister,
    vendor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
