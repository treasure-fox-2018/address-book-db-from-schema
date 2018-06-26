const db  = require('./db')
db.get("PRAGMA foreign_keys = ON")

function create() {
  db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS Contacts
      (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100) UNIQUE,
      company VARCHAR, phoneNumber VARCHAR(15) UNIQUE, email VARCHAR)`,function (err) {
        if (err) console.log(err)
      });

    db.run(`CREATE TABLE IF NOT EXISTS Groups
      (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR UNIQUE)`, function (err) {
        if (err) console.log(err)
      });

    db.run(`CREATE TABLE IF NOT EXISTS ContactsGroups
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
    contactId INTEGER,
    groupId INTEGER,
    FOREIGN KEY (contactId) REFERENCES Contacts(id),
    FOREIGN KEY(groupId) REFERENCES Groups(id))`, function (err) {
      if (err) console.log(err)
    });
  })
}

create()
