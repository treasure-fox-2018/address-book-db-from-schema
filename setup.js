const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Contacts
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          Contact_name VARCHAR(50),
          Phone_number VARCHAR(20),
          Address VARCHAR (100))`);

  db.run(`CREATE TABLE IF NOT EXISTS Groups
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          Group_name VARCHAR(50))`);

  db.run(`CREATE TABLE IF NOT EXISTS ContactGroup
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          Contact_id INTEGER REFERENCES Contacts(id),
          Group_id INTEGER REFERENCES Groups(id))`);
});