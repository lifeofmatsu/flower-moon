const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class CartItem extends Model {}

CartItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
        },
        cartId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cart',
                key: 'id',
            },
        },
        teaId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tea',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cartItem',
    },
);

module.exports = CartItem;
