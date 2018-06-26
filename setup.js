const db = require('./db')

const queryContact = `CREATE TABLE IF NOT EXISTS contacts
(id INTEGER PRIMARY KEY AUTOINCREMENT,contactName VARCHAR UNIQUE, phone_number VARCHAR, address VARCHAR, email VARCHAR UNIQUE)`
const queryGroup = `CREATE TABLE IF NOT EXISTS groups
(id INTEGER PRIMARY KEY AUTOINCREMENT,groupName VARCHAR)`
const queryContactGroup = `CREATE TABLE IF NOT EXISTS contact_groups
(id INTEGER PRIMARY KEY AUTOINCREMENT, ContactId INTEGER, GroupId INTEGER,
  FOREIGN KEY(ContactId) REFERENCES contacts(id),
  FOREIGN KEY(GroupId) REFERENCES groups(id) )`

db.serialize(function() {
  db.run(queryContact, function (err) {
    if (err) throw err;
    console.log('contacts table successfully created');
  });
  db.run(queryGroup, function (err) {
    if (err) throw err;
    console.log('groups table successfully created');
  });
  db.run(queryContactGroup, function (err) {
    if (err) throw err;
    console.log('contact_groups table successfully created');
  });
})
