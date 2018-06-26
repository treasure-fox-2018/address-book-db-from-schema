const fs = require('fs');
const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./address_book.db');
db.get("PRAGMA foreign_keys = ON")

function insertContacts() {
  let arrContacts = fs.readFileSync('contacts.csv').toString().split("\n");
  arrContacts.shift()
  db.serialize(function() {
    let stmt = db.prepare("INSERT INTO Contacts (name, company, phoneNumber, email) VALUES (?,?,?,?)", function (err) {
      if (err) console.log(err)
    });
    for (let i = 0; i < arrContacts.length-1; i++) {
      let data = arrContacts[i].split(",")
      const name = data[0]
      const company = data[1]
      const phoneNumber = data[2]
      const email = data[3]
      stmt.run(name,company,phoneNumber,email, function (err) {
        if (err) console.log(err)
      })
    }
    stmt.finalize( function (err) {
      if (err) console.log(err)
    })
  })
}

function insertGroups() {
  let arrGroups = fs.readFileSync('groups.csv').toString().split("\n");
  arrGroups.shift()

  db.serialize(function() {
    let stmt = db.prepare("INSERT INTO Groups (name) VALUES (?)", function (err) {
      if (err) console.log(err)
    });
    for (let i = 0; i < arrGroups.length-1; i++) {
      const name = arrGroups[i]
      stmt.run(name, function (err) {
        if (err) console.log(err)
      })
    }
    stmt.finalize(function (err) {
      if (err) console.log(err)
    })
  })
}

function insertContactsGroups() {
  let arrContactsGroups = fs.readFileSync('contactsgroups.csv').toString().split("\n");
  arrContactsGroups.shift()

  db.serialize(function() {
    let stmt = db.prepare("INSERT INTO ContactsGroups (contactId,groupId) VALUES (?,?)", function (err) {
      if (err) console.log(err)
    })
    for (let i = 0; i < arrContactsGroups.length-1; i++) {
      let data = arrContactsGroups[i].split(",")
      const contactId = data[0]
      const groupId = data[1]
      stmt.run(contactId,groupId, function (err) {
        if (err) console.log(err)
      })
    }
    stmt.finalize(function (err) {
      if (err) console.log(err)
    })
  });
}

insertContacts()
insertGroups()
insertContactsGroups()
db.close();