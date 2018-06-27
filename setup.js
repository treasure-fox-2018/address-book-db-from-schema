const db = require('./database.js')

function create_table_addressBook() {
  db.serialize(function(){
    db.run(`CREATE TABLE IF NOT EXISTS Contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(100),
      phoneNumber VARCHAR(20) UNIQUE,
      eMail VARCHAR(100) UNIQUE,
      nameCompany VARCHAR(100)
    )`)
    db.run(`CREATE TABLE IF NOT EXISTS Groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      groupName VARCHAR(100)
    )`)
    db.run(`CREATE TABLE IF NOT EXISTS Contacts_Groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contactId INTEGER,
      groupId INTEGER,
      FOREIGN KEY (contactId) REFERENCES Contacts(id),
      FOREIGN KEY (groupId) REFERENCES Groups(id)
    )`)
  })
}


create_table_addressBook()