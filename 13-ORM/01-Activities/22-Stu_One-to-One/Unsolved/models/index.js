const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  //If you delete from one table, like the parent table, the related data to that key will be deleted from all other tables that are connected.
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
//Reader and LibraryCard are both modules that are being exported from this file to be used in any other file.
module.exports = { Reader, LibraryCard };
