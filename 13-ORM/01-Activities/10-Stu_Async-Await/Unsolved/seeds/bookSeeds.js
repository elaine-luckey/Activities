const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
  return sequelize.sync({ 
    force: true 
  })
  const bookBulking = () => {
    Book.bulkCreate(bookSeedData);
  };

  const libraryBulking = () =>{
    Library.bulkCreate(librarySeedData);
  }

  const printConsole = () => {
    console.log('All Seeds Planted'); 
  }

  const seedDatabaseAsync = async () => {
    await bookBulking();
    await libraryBulking();
    await printConsole();

  }

  process.exit(0);
};

seedDatabase();
