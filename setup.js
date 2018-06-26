const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./address_book.db')

const queryContact = `CREATE TABLE IF NOT EXISTS Contact 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    company VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(100) UNIQUE)`
const queryGroup = `CREATE TABLE IF NOT EXISTS 'Group' 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100))`
const queryGroupContact = `CREATE TABLE IF NOT EXISTS Group_Contact 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER,
    group_id INTEGER)`


function createTable() {
    db.serialize(function() {

        db.run(queryContact, function(err) {
            if(err) throw err
        })
        
        db.run(queryGroup, function(err) {
            if(err) throw err
        })

        db.get("PRAGMA foreign_keys = ON")
        db.run(queryGroupContact, function(err) {
            if(err) throw err
        })
        console.log('Done Create 3 Tables!')
    })
}

const joinContact = `SELECT * FROM Contact LEFT JOIN Group_Contact ON Contact.id = Group_Contact.contact_id`
const joinGroup = `SELECT * FROM 'Group' LEFT JOIN Group_Contact ON 'Group'.id = Group_Contact.group_id`

function tableRelation() {
    db.serialize(function() {

        db.all(joinContact, function(err, qContact) {
            if(err) throw err
            console.log(qContact)
        })
        db.all(joinGroup, function(err, qGroup) {
            if(err) throw err
            console.log(qGroup)
        })

    })
}

createTable()
tableRelation()