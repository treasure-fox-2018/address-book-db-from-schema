var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');


function createTable() {
        db.serialize(function () {
                db.run(`CREATE TABLE IF NOT EXISTS Contacts
                (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name VARCHAR(100), 
                company_name TEXT, 
                phone_number VARCHAR(100), 
                email TEXT)`);

                db.run(`CREATE TABLE IF NOT EXISTS Groups
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(100))`);

                db.run(`CREATE TABLE IF NOT EXISTS ContactGroup
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                contactId INTEGER,
                groupId INTEGER,
                FOREIGN KEY(contactId) REFERENCES Contacts(id),
                FOREIGN KEY(groupId) REFERENCES Groups(id))`);
        });

}

createTable()