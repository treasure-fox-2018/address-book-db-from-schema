const db = require('./db');


function createDB() {
    var tableContact = `CREATE TABLE IF NOT EXISTS Contacts
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nama VARCHAR,
        perusahaan VARCHAR, 
        nomor_telepon UNIQUE, 
        email UNIQUE)`
    
    var tableGroup = `CREATE TABLE IF NOT EXISTS Groups 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
         nama_group VARCHAR)`
    
    var contact_group = `CREATE TABLE IF NOT EXISTS contact_group 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
        contactId INTEGER,
        groupId INTEGER,
        FOREIGN KEY (contactId) REFERENCES Contacts(id),
        FOREIGN KEY (groupId) REFERENCES Groups(id))`
    db.serialize(function () {
        db.run(tableContact)
        db.run(tableGroup)
        db.run(contact_group)
    })
    
}

createDB()