var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');


function Crud() {

    db.serialize(function () {

        db.run(`CREATE TABLE IF NOT EXISTS contacts 
                (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    group_id INTEGER,
                    nama VARCHAR(20),
                    perusahaan VARCHAR(100), 
                    noTelfon INTEGER,
                    email VARCHAR(100), 
                    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE )`);

        db.run(`CREATE TABLE IF NOT EXISTS groups (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,nama varchar(20))`);


    })




}

Crud()

module.exports = db