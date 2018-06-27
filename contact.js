const fs = require('fs');
const db = require('./db.js');


class Contact {
    constructor(name, company_name, phone_number, email) {
        this.id = null
        this.name = name
        this.company_name = company_name
        this.phone_number = phone_number
        this.email = email
    }

    static transferContacts(callback) {

        let contacts = JSON.parse(fs.readFileSync('datacontacts.JSON', 'utf8'));

        db.serialize(function () {
            for (let i = 0; i < contacts.length; i++) {
                const queryInput = `INSERT INTO Contacts (name, company_name, phone_number, email)
                            VALUES ("${contacts[i].name}", "${contacts[i].company_name}", "${contacts[i].phone_number}", "${contacts[i].email}")`
                db.run(queryInput, function (err) {
                    if (err) throw err

                })
            }
            callback(`output`)
        })

    }

    static createContact(name, company_name, phone_number, email, callback) {
        let contact = new Contact(name, company_name, phone_number, email)
        const queryInput = `INSERT INTO Contacts (name, company_name, phone_number, email)
                            VALUES ("${contact.name}", "${contact.company_name}", "${contact.phone_number}", "${contact.email}")`

        db.run(queryInput, function (err) {
            if (err) throw err
            callback(contact)
        });
    }

    static updateContact(id, name, company_name, phone_number, email, callback) {
        const queryUpdate = `UPDATE Contacts
                              SET name = "${name}",
                                  company_name = "${company_name}",
                                  phone_number = "${phone_number}",
                                  email = "${email}"
                              WHERE id = ${id}`
        db.run(queryUpdate, function (err) {
            if (err) throw err
            callback(`output`)
        });
    }

    static deleteContact(id, name, callback) {
        const queryDelete = `DELETE FROM Contacts
                             WHERE id = ${id} AND name = "${name}"`

        db.run(queryDelete, function (err) {
            if (err) throw err
            // callback(`output`)

            const queryUpdate = `UPDATE ContactGroup
                                 SET contactId = NULL
                                 WHERE contactId = ${id}`

            db.run(queryUpdate, function (err) {
                if (err) throw err
                callback(`output`)
            })
        });
    }

    static showContact(id, callback) {
        const queryShow = `SELECT Contacts.name, Contacts.company_name, Contacts.phone_number, Contacts.email, Groups.name AS groupName 
                           FROM Contacts 
                           LEFT JOIN ContactGroup 
                                ON Contacts.id = ContactGroup.contactId 
                           LEFT JOIN Groups 
                                ON ContactGroup.groupId = Groups.id 
                            WHERE Contacts.id = ${id}
                            ORDER BY Contacts.name ASC`

    
        db.all(queryShow, function (err, data) {
            if (err) throw err
                callback(data)
        });

    }


    static assignContact(ContactName, GroupName, callback) {
        const queryContactId = `SELECT id AS ContactId FROM Contacts
                                WHERE name = "${ContactName}"`

        const queryGroupId = `SELECT id AS GroupId FROM Groups
                              WHERE name = "${GroupName}"`

        

        
        db.get(queryContactId, function (err, dataContact) {
            if (err) throw err
            // console.log(dataContact.ContactId)
            db.get(queryGroupId, function (err, dataGroup) {
                if (err) throw err

                const queryInsertJoin = `INSERT INTO ContactGroup (contactId, groupId)
                                 VALUES ("${dataContact.ContactId}", "${dataGroup.GroupId}")`
                // console.log(dataGroup.GroupId)
                db.run(queryInsertJoin, function (err) {
                    if (err) throw err
                    callback(`output`)
                })
            })
        })
    }
}

module.exports = Contact;