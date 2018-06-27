'use strict'

const sqlite3 = require('sqlite3').verbose()

const path = require('path');
const dbPath = path.resolve(__dirname, './address_book.db')
var db = new sqlite3.Database(dbPath);

function createTables() {
    const createContactsTable = `CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                      name VARCHAR,
                                                      phone_number VARCHAR UNIQUE,
                                                      email VARCHAR UNIQUE,
                                                      company_name VARCHAR);`
    const createGroupsTable = `CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                    name VARCHAR UNIQUE);`

    const createContactGroupsTable = `CREATE TABLE IF NOT EXISTS Contact_groups (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                   Contact_Id INTEGER,
                                                                   Group_Id INTEGER,
                                                                   FOREIGN KEY (Contact_Id) REFERENCES contacts(id),
                                                                   FOREIGN KEY (Group_Id) REFERENCES groups(Id));`
    db.serialize( () => {
        db.run(createContactsTable, function (err) {
            if (err) throw err
        })

        db.run(createGroupsTable, function (err) {
            if (err) throw err
        })

        db.run(createContactGroupsTable, function (err) {
            if (err) throw err
        })
    })
}

createTables()


module.exports = db
