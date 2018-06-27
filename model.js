'use strict'

const fs = require('fs')
const db = require('./db')
const Contact = require('./contact')
const Group = require('./group')
const ContactGroup = require('./contact-group')

class Model {
  static addContact(input,callback){
    let name = input[0]
    let phone_number = input[1]
    let email = input[2]
    let company = input[3]

    let newContact = new Contact(name, phone_number, email, company)

    const addContactQuery = `INSERT INTO contacts (contactName, phone_number, company, email)
    VALUES ("${newContact.contactName}", "${newContact.phone_number}", "${newContact.email}", "${newContact.company}")`;
    const totalContactQuery = `SELECT COUNT(id) AS total FROM contacts`
    db.serialize(function() {
      db.run(addContactQuery, function (err) {
        if (err) throw err;
      });
      db.all(totalContactQuery, function (err, data) {
        if (err) throw err;
        let totalContact = data[0].total
        callback(JSON.stringify(newContact), totalContact)
      });
    })
  }
  static updateContact(input, callback){
    let contactId = input[0]
    let name = input[1]
    let phone_number = input[2]
    let email = input[3]
    let company = input[4]

    let contactUpdate = new Contact(name, phone_number, email, company)

    const updateContactQuery = `UPDATE contacts
    SET contactName = "${contactUpdate.contactName}", phone_number = "${contactUpdate.phone_number}",
    email = "${contactUpdate.email}, company = "${contactUpdate.company}"
    WHERE id = "${contactId}"`

    db.serialize(function() {
      db.run(updateContactQuery, function (err) {
        if (err) throw err;
        callback(JSON.stringify(contactUpdate), contactId)
      });
    })
  }
  static deleteContact(input, callback){
    let contactId = input[0]

    const deleteContactQuery = `DELETE FROM contacts WHERE id = ${contactId}`
    const deleteContactGroupQuery = `DELETE FROM contact_groups WHERE ContactId = ${contactId}`
    const totalContactQuery = `SELECT COUNT(id) AS total FROM contacts`
    db.serialize(function() {
      db.run(deleteContactQuery, function (err) {
        if (err) throw err;
      });
      db.run(deleteContactGroupQuery, function (err) {
        if (err) throw err;
      });
      db.all(totalContactQuery, function (err, data) {
        if (err) throw err;
        let totalContact = data[0].total
        callback(totalContact)
      });
    })
  }
  static showContact(callback){
    const showContactQuery = `SELECT contacts.id AS "Contact ID", contacts.contactName AS "Contact Name", contacts.phone_number AS "Phone Number", contacts.email AS "Contact Email", contacts.company AS "Contact Company", tempData.groupName AS "Group Name"
    FROM contacts JOIN (SELECT * FROM contact_groups JOIN groups ON GROUPS.id = contact_groups.GroupId) AS tempData
    ON contacts.id = tempData.ContactId ORDER BY contacts.id`
    db.all(showContactQuery, function (err, data) {
      if (err) throw err;
      callback(data)
    });
  }
  static addGroup(input,callback){
    let name = input[0]

    let newGroup = new Group(name)

    const addGroupQuery = `INSERT INTO groups (groupName)
    VALUES ("${newGroup.groupName}")`;
    const totalGroupQuery = `SELECT COUNT(id) AS total FROM groups`
    db.serialize(function() {
      db.run(addGroupQuery, function (err) {
        if (err) throw err;
      });
      db.all(totalGroupQuery, function (err, data) {
        if (err) throw err;
        let totalGroup = data[0].total
        callback(JSON.stringify(newGroup), totalGroup)
      });
    })
  }
  static updateGroup(input, callback){
    let groupId = input[0]
    let name = input[1]

    let groupUpdate = new Group(name)

    const updateGroupQuery = `UPDATE groups
    SET groupName = "${groupUpdate.groupName}"
    WHERE id = "${groupId}"`

    db.serialize(function() {
      db.run(updateGroupQuery, function (err) {
        if (err) throw err;
        callback(JSON.stringify(groupUpdate), groupId)
      });
    })
  }
  static deleteGroup(input, callback){
    let groupId = input[0]

    const deleteGroupQuery = `DELETE FROM groups WHERE id = ${groupId}`
    const deleteContactGroupQuery = `DELETE FROM contact_groups WHERE GroupId = ${groupId}`
    const totalGroupQuery = `SELECT COUNT(id) AS total FROM groups`
    db.serialize(function() {
      db.run(deleteGroupQuery, function (err) {
        if (err) throw err;
      });
      db.run(deleteContactGroupQuery, function (err) {
        if (err) throw err;
      });
      db.all(totalGroupQuery, function (err, data) {
        if (err) throw err;
        let totalGroup = data[0].total
        callback(totalGroup)
      });
    })
  }
  static showGroup(callback){
    const showGroupQuery = `SELECT * FROM groups`
    db.all(showGroupQuery, function (err, data) {
      if (err) throw err;
      callback(data)
    });
  }
  static addContactGroup(input,callback){
    let contactId = input[0]
    let groupId = input[1]

    let newContactGroup = new ContactGroup(contactId, groupId)

    const addContactGroupQuery = `INSERT INTO contact_groups (ContactId, GroupId)
    VALUES ("${newContactGroup.contactId}", "${newContactGroup.groupId}")`;
    const totalContactGroupQuery = `SELECT COUNT(id) AS total FROM contact_groups`
    db.serialize(function() {
      db.run(addContactGroupQuery, function (err) {
        if (err) throw err;
      });
      db.all(totalContactGroupQuery, function (err, data) {
        if (err) throw err;
        let totalContactGroup = data[0].total
        callback(JSON.stringify(newContactGroup), totalContactGroup)
      });
    })
  }
  static updateContactGroup(input, callback){
    let contactGroupId = input[0]
    let contactId = input[1]
    let groupId = input[2]

    let contactGroupUpdate = new ContactGroup(contactId, groupId)

    const updateContactGroupQuery = `UPDATE contact_groups
    SET ContactId = "${contactGroupUpdate.contactId}", GroupId = "${contactGroupUpdate.groupId}"
    WHERE id = "${contactGroupId}"`

    db.serialize(function() {
      db.run(updateContactGroupQuery, function (err) {
        if (err) throw err;
        callback(JSON.stringify(contactGroupUpdate), contactGroupId)
      });
    })
  }
}

module.exports = Model;
