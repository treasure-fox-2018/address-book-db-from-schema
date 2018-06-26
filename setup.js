var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');
const fs = require('fs');
const db = require('./db.js');

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

        // function readContacts() {

        // }
        // readContacts();

        function readGroups() {
                fs.readFileSync('datagroups.JSON', 'utf8', (err, groups) => {
                        if (err) throw err
                        groups = groups.split('\n');
                        for (let i = 0; i < groups.length; i++) {
                                groups[i] = groups[i].split(',');
                        }
                });
        }
        readGroups();
}

createTable()