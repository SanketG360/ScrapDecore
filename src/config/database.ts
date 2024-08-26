import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('scrab_decor_db', 'postgres', 'system', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;