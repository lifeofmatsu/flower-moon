const User = require('./User');
const Cart = require('./Cart');
const Tea = require('./Tea');
const Orders = require('./Orders');
const CartItem = require('./CartItem');
const OrderItem = require('./OrderItem');

// All Relations (one to one, one to many, etc.)
Cart.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
})

User.hasOne(Cart, {
    foreignKey: "cart_id",
    onDelete: "cascade"
})

Orders.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
})

User.hasMany(Orders, {
    foreignKey: "orders_id",
    onDelete: "cascade"
})

Tea.belongsToMany(Cart, {
    through: CartItem,
    foreignKey: "tea_id"
})

Cart.belongsToMany(Tea, {
    through: CartItem,
    foreignKey: "cart_id"
})

Tea.belongsToMany(Orders, {
    through: OrderItem,
    foreignKey: "tea_id"
})

Orders.belongsToMany(Tea, {
    through: OrderItem,
    foreignKey: "orders_id"
})

module.exports = {
    User,
    Cart,
    Tea,
    Orders,
    CartItem,
    OrderItem,
};
