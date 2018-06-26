const db = require('./db');
db.get("PRAGMA foreign_keys = ON");

function create() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Contacts
      (id INTEGER PRIMARY KEY AUTOINCREMENT, full_name VARCHAR(100) UNIQUE, company_name VARCHAR(100),
    phone_number INTEGER UNIQUE, email_address VARCHAR(100) UNIQUE)`);

    db.run(`CREATE TABLE IF NOT EXISTS Groups
    (id INTEGER PRIMARY KEY AUTOINCREMENT, group_name VARCHAR(100) UNIQUE)`);

    db.run(`CREATE TABLE IF NOT EXISTS ContactsGroups
      (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, groupId INTEGER,
      FOREIGN KEY (contactId) REFERENCES Contacts(id),
      FOREIGN KEY (groupId) REFERENCES Groups(id))`);
  });
}

create();
