'use strict'

const db = require('../setup.js')

class ContactGroup {
    constructor(Contact_Id, Group_Id) {
        this.Contact_Id = Contact_Id
        this.Group_Id = Group_Id
    }

    static checkDuplicate(contactId, groupId, callback) {
        let checkDuplicateQuery = `SELECT * FROM Contact_groups WHERE Contact_Id = ${contactId} AND Group_Id = ${groupId}`

        db.all(checkDuplicateQuery, function(err, duplicates) {
            if (err) throw err
            callback(duplicates)
        })
    }

    static assignContactToGroup(contactId, groupId, callback) {
        let assignContactQuery = `INSERT INTO Contact_groups (Contact_Id, Group_Id) VALUES ("${contactId}","${groupId}")`

        db.run(assignContactQuery, function(err) {
            if (err) throw err
            callback()
        })
    }

}

module.exports = ContactGroup
