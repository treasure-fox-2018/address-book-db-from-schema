"use strict"
const sqlite3 = require('sqlite').verbose();
const db = new sqlite3.Database('./address_book');

function createTable(){

    db.serialize(function(){

        db.run(`CREATE TABLE IF NOT EXISTS contacts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        company TEXT,
        phone_number INTEGER,
        email TEXT)`);

        db.run (`CREATE TABLE IF NOT EXISTS groups(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )`);

        db.run (`CREATE TABLE IF NOT EXISTS contactGroup(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            contactID INTEGER,
            groupID INTEGER,
            FOREIGN KEY contactID REFERENCES contact(id)
            FOREIGN KEY groupID REFERENCES group(id) 
        )`)
    })
}


createTable();