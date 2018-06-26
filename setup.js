const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./addressBook.db')

function setup(){
    db.serialize(function(){
        db.run(`CREATE TABLE IF NOT EXISTS Contacts
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT(100),
                company TEXT(100),
                phone TEXT(12) UNIQUE,
                email TEXT(100) UNIQUE)
            `)
        
        db.run(`CREATE TABLE IF NOT EXISTS Groups
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                groupName TEXT(100) UNIQUE)
            `)
        
        db.run(`CREATE TABLE IF NOT EXISTS ContactGroup
                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                contactId INTEGER,
                groupId INTEGER,
                FOREIGN KEY(contactId) REFERENCES Contacts(id) ON DELETE CASCADE,
                FOREIGN KEY(groupId) REFERENCES Groups(id) ON DELETE CASCADE)
            `)

        db.get("PRAGMA foreign_keys = ON")
    })
}

setup()
module.exports = db