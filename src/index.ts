import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 8000;

sequelize.sync().then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
