const fs = require('fs')
const db  = require('./db')
db.get("PRAGMA foreign_keys = ON")

class Contact {

  static importContacts(fileName,callback) {
    let arrContacts = fs.readFileSync(`./${fileName}`).toString().split("\n");
    arrContacts.shift()
    db.serialize(function() {
      let stmt = db.prepare("INSERT INTO Contacts (name, company, phoneNumber, email) VALUES (?,?,?,?)", function (err) {
        if (err) callback(`error`, err)
        for (let i = 0; i < arrContacts.length-1; i++) {
          let data = arrContacts[i].split(",")
          const name = data[0]
          const company = data[1]
          const phoneNumber = data[2]
          const email = data[3]
          stmt.run(name,company,phoneNumber,email, function (err) {
            if (err) callback(`error`, err)
          })
        }
        stmt.finalize( function (err) {
          if (err) callback(`error`, err)
          else callback (true, `${this.lastID} data from ${fileName} successfully imported to database`)
        })
      })
    })
  }

  static create(name, company, phone, email, callback) {
    const query = `INSERT INTO Contacts (name, company, phoneNumber, email) VALUES ("${name}", "${company}", "${phone}", "${email}")`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`new data contact successfully added with id ${this.lastID}`)
    });
  }

  static delete(id, callback){
    const query = `DELETE FROM Contacts WHERE id=${id}`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`data contact id ${id} successfully deleted`)
    })
  }

  static update(id, name, company, phone, email, callback) {
    const query = `UPDATE Contacts
                    SET name = "${name}",
                    company = "${company}",
                    phoneNumber = "${phone}",
                    email = "${email}"
                    WHERE id= ${id}`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`data contact id ${id} successfully updated`)
    });
  }

  static show (callback) {
    let query = `SELECT Contacts.id, Contacts.name, Contacts.company , Contacts.phoneNumber, Contacts.email,  
                  GROUP_CONCAT (Groups.name) AS "group"
                  FROM Contacts 
                  LEFT JOIN ContactsGroups ON Contacts.id = ContactsGroups.contactId  
                  LEFT JOIN Groups ON Groups.id = ContactsGroups.groupId
                  GROUP BY Contacts.name
                  ORDER BY Contacts.id`
    db.all(query, function (err,data) {
      if (err) callback(`error`, err)
      else callback(true,data)
    })
  }
}

module.exports = Contact