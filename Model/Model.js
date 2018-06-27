const Controllers = require('../Controller/Controllers')
const db = require('../database')
const fs = require('fs')

class Contact {
  static addContact(name, phoneNumber, eMail, nameCompany, callback) {
    let addContactQuery = `INSERT INTO Contacts(name, phoneNumber, eMail, nameCompany) VALUES("${name}", "${phoneNumber}", "${eMail}", "${nameCompany}")`
    db.run(addContactQuery, function(err){
      if(err) throw err
    })
    let readContactQuery = `SELECT name, phoneNumber, eMail, nameCompany FROM Contacts WHERE name = "${name}"`
    db.get(readContactQuery, function(err, row){
      if(err) throw err
      callback(row)
    })
  }

  static showContacts(name, callback) {
    if (name !== undefined) {
      let readContactQuery = `SELECT name, phoneNumber FROM Contacts WHERE name = "${name}"`
      db.all(readContactQuery, (err, data) => {
        if (err) throw err
        callback(data)
      })
    } else {
      let readContactQuery = `SELECT name, phoneNumber FROM Contacts`
      db.all(readContactQuery, (err, data) => {
        if(err) throw err
        callback(data)
      })
    }
  }

  static editContactName(name, editName) {
    let editContactQuery = `UPDATE Contacts SET name = "${editName}" WHERE name = "${name}"`
    db.run(editContactQuery, (err) => {
      if(err) throw err
    })
  }

  static deleteContact(name) {
    let deleteContactQuery = `DELETE FROM Contacts WHERE name = "${name}"`
    db.run(deleteContactQuery, (err) => {
      if (err) throw err
    })
  }
}

class Group {
  static addGroup(nameGroup, callback) {
    let addContactQuery = `INSERT INTO Groups(groupName) VALUES("${nameGroup}")`
    db.run(addContactQuery, function(err){
      if(err) throw err
    })
    let readContactQuery = `SELECT groupName FROM Groups WHERE groupName = "${nameGroup}"`
    db.get(readContactQuery, function(err, row){
      if(err) throw err
      callback(row.groupName)
    })
  }

  static showGroups(nameGroup, callback) {
    if (nameGroup !== undefined) {
      let readGroupQuery = `SELECT groupName FROM Groups WHERE nameGroup = "${nameGroup}"`
      db.all(readGroupQuery, (err, data) => {
        if (err) throw err
        callback(data)
      })
    } else {
      let readGroupQuery = `SELECT groupName FROM Groups`
      db.all(readGroupQuery, (err, data) => {
        if(err) throw err
        callback(data)
      })
    }
  }

  static editGroupName(nameGroup, editNameGroup) {
    let editGroupName = `UPDATE Groups SET groupName = "${editNameGroup}" WHERE GroupName = "${nameGroup}"`
    db.run(editGroupName, (err) => {
      if(err) throw err
    })
  }

  static deleteGroup(nameGroup) {
    let deleteGroupQuery = `DELETE FROM Groups WHERE GroupName = "${nameGroup}"`
    db.run(deleteGroupQuery, (err) => {
      if (err) throw err
    })
  }
}

class Contacts_groups {
  static addContactToGroup(nameContact, nameGroup, callback) {
    let contactGroupQuery = `INSERT INTO Contacts_Groups(contactId, GroupId) VALUES ((SELECT id FROM Contacts WHERE name = "${nameContact}"), (SELECT id FROM Groups WHERE groupName = "${nameGroup}"))`
    db.run(contactGroupQuery, (err) => {
      if(err) throw err
      callback()
    })
  }

  static showContactsInGroups(callback) {
    let contactShowQuery = `SELECT newTable.contactName, Groups.groupName AS groupName FROM Contacts_Groups,
    (SELECT Contacts.name AS contactName, Contacts_Groups.contactId AS contactId
    FROM Contacts
    INNER JOIN Contacts_Groups
      ON Contacts.id = Contacts_Groups.contactId
    GROUP BY Contacts.id
    ORDER BY Contacts.name
    ) AS newTable
    JOIN Groups
      ON Contacts_Groups.groupId = Groups.id
    WHERE Contacts_Groups.contactId = newTable.contactId
    ORDER BY newTable.contactName ASC;`
    db.all(contactShowQuery, (err, data) => {
      if(err) throw err
      callback(data)
    })
  }

  static editContactInGroup(nameContact, modifyContact) {
    let editQuery = `UPDATE Contacts_Groups SET contactId = (SELECT id FROM Contacts WHERE name = "${modifyContact}") WHERE id = (SELECT id FROM Contacts WHERE name = "${nameContact}")`
    db.run(editQuery, (err) => {
      if(err) throw err
    })
  }

  static deleteContactInGroup(nameContact, callback) {
    let deleteQuery = `DELETE FROM Contacts_Groups WHERE id = (SELECT id FROM Contacts WHERE name = "${nameContact}")`
    let deleteContactQuery = `DELETE FROM Groups WHERE name = "${nameContact}"`
    db.serialize(() => {
      db.run(deleteQuery, (err) => {
        if(err) throw err
      })
      db.run(deleteContactQuery, (err) => {
        if(err) throw err
        callback(true)
      })
    })
  }

}

module.exports = {
  contact: Contact,
  group: Group,
  contacts_groups: Contacts_groups
}

