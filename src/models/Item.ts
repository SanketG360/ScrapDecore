import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Category from './Category';

class Item extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public categoryId!: number;
}

Item.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Item',
});

Item.belongsTo(Category, { foreignKey: 'categoryId' });

export default Item;
