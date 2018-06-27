const fs = require('fs')
const db  = require('./db')
db.get("PRAGMA foreign_keys = ON")

class ContactGroup {
  constructor (obj) {
    this.id = obj.id
    this.contactId = obj.contactId
    this.companyId = obj.companyId
  }

  static importContactsGroups(fileName,callback) {
    let arrContactsGroups = fs.readFileSync('contactsgroups.csv').toString().split("\n");
    arrContactsGroups.shift()
    db.serialize(function() {
      let stmt = db.prepare("INSERT INTO ContactsGroups (contactId,groupId) VALUES (?,?)", function (err) {
        if (err) callback(`error`, err)
      })
      for (let i = 0; i < arrContactsGroups.length-1; i++) {
        let data = arrContactsGroups[i].split(",")
        const contactId = data[0]
        const groupId = data[1]
        stmt.run(contactId,groupId, function (err) {
          if (err) callback(`error`, err)
        })
      }
      stmt.finalize(function (err) {
        if (err) callback(`error`, err)
        else callback (true, `${this.lastID} data from ${fileName} successfully imported to database`)
      })
    })
  }

  static create(contactId, groupId ,callback) {
    const query = `INSERT INTO ContactsGroups (contactId, groupId) VALUES ("${contactId}", "${groupId}")`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`contact id ${contactId} successfully assigned to group id ${groupId}`)
    });
  }

  static deleteByGroup (groupId,callback) {
    const query = `DELETE FROM ContactsGroups WHERE groupId=${groupId}`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`data group id ${groupId} successfully deleted from contact-group db`)
    })
  }

  static deleteByContact (contactId,callback){
    const query = `DELETE FROM ContactsGroups WHERE contactId=${contactId}`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`data contact id ${contactId} successfully deleted from contact-group db`)
    })
  }

  
}

module.exports = ContactGroup