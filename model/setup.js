const db  = require('./db')
db.get("PRAGMA foreign_keys = ON")

class Setup {
  static create(callback) {
    db.serialize(function() {
      db.run(`CREATE TABLE IF NOT EXISTS Contacts
        (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100) UNIQUE,
        company VARCHAR, phoneNumber VARCHAR(15) UNIQUE, email VARCHAR)`,function (err) {
          if (err) {
            callback(`error`, `create db Contacts ${err}`)
          } else callback(true,`Database Contacts successfully created`)
        })
      
      db.run(`CREATE TABLE IF NOT EXISTS Groups
        (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR UNIQUE)`, function (err) {
          if (err) {
            callback(`error`,`create db Groups ${err}`)
          } else callback(true,`Database Groups successfully created`)
        })
      db.run(`CREATE TABLE IF NOT EXISTS ContactsGroups
      (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      contactId INTEGER,
      groupId INTEGER,
      FOREIGN KEY (contactId) REFERENCES Contacts(id),
      FOREIGN KEY(groupId) REFERENCES Groups(id))`, function (err) {
        if (err) {
            callback(`error`, `create db ContactsGroups ${err}`)
        } else callback(true,`Database ContactsGroups successfully created`)
      })
    })
  }
}

module.exports = Setup