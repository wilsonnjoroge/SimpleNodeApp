const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('briandemo', '***', '*******', {
  host: 'localhost', 
  dialect: 'mysql',
});

async function testConnection(retries = 5) {
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
      return;
    } catch (error) {
      console.error('Unable to connect to the database, retrying...', error);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000)); // Wait 5 seconds before retrying
    }
  }
  console.error('Unable to connect to the database after multiple retries.');
}

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronized successfully');
    testConnection();
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

module.exports = sequelize;
