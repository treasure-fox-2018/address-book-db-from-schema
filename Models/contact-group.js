'use strict'

const db = require('../setup.js')

class ContactGroup {
    constructor(Contact_Id, Group_Id) {
        this.Contact_Id = Contact_Id
        this.Group_Id = Group_Id
    }

    static checkDuplicate(contactId, groupId, callback) {
        let checkDuplicateQuery = `SELECT * FROM Contact_groups WHERE Contact_Id = ${contactId} AND Group_Id = ${groupId}`

        db.serialize( function() {
          db.all(checkDuplicateQuery, function(err, duplicates) {
              if (err) throw err
              callback(duplicates)
          })

          db.close()
        })
    }

    static assignContactToGroup(contactId, groupId, callback) {
        let assignContactQuery = `INSERT INTO Contact_groups (Contact_Id, Group_Id) VALUES ("${contactId}","${groupId}")`

        db.run(assignContactQuery, function(err) {
            if (err) throw err
            callback()
        })
    }

    static showAllGroupContacts(callback) {
        let showAllGroupContactsQuery = `SELECT contactName, groups.name as groupName FROM (SELECT contacts.name as contactName,
                                                                                									 contacts.id as contactId,
                                                                              									   Contact_groups.Group_Id as groupId
                                                                              							FROM Contact_groups
                                                                              							JOIN contacts
                                                                              							ON Contact_groups.Contact_Id = contacts.id) as contactGroups
                                                JOIN groups
                                                ON contactGroups.groupId = groups.id
                                                ORDER BY groupName ASC`
        db.all(showAllGroupContactsQuery, function(err, GroupContacts) {
            if (err) throw err
            callback(GroupContacts)
        })
    }

}

module.exports = ContactGroup
