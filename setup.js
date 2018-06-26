var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./address.db");

db.serialize(function(){
    db.run(`CREATE TABLE IF NOT EXISTS Contacts(id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,phone_number TEXT UNIQUE, email TEXT UNIQUE)`)

    db.run(`CREATE TABLE IF NOT EXISTS Groups(id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT )`)

    db.run(`CREATE TABLE IF NOT EXISTS ContactGroup(id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER,
    group_id INTEGER,
    FOREIGN KEY(contact_id) REFERENCES Contacts(id),
    FOREIGN KEY(group_id) REFERENCES Groups(id))`)
})