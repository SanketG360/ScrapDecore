import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Item from './Item';

class Order extends Model {
  public id!: number;
  public itemId!: number;
  public quantity!: number;
  public totalAmount!: number;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Order',
});

Order.belongsTo(Item, { foreignKey: 'itemId' });

export default Order;
