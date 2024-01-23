const User = require('./User');
const Cart = require('./Cart');
const Item = require('./Item');
const Orders = require('./Orders');
const CartItem = require('./CartItem');
const OrderItem = require('./OrderItem');

// Insert all relations (one to one, one to many, etc.)

//

module.exports = {
    User,
    Cart,
    Item,
    Orders,
    CartItem,
    OrderItem,
};
