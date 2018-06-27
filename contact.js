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

    static deleteContact(name, callback) {
        const queryDelete = `DELETE FROM Contacts
                             WHERE name = "${name}"`

        db.run(queryDelete, function (err) {
            if (err) throw err
            callback(`output`)
        });
    }

    static showContact(id, callback) {
        const queryShow = `SELECT Contacts.name, Contacts.company_name, Contacts.phone_number, Contacts.email, Groups.name AS groupName 
                           FROM Contacts 
                           JOIN ContactGroup 
                                ON Contacts.id = ContactGroup.contactId 
                           JOIN Groups 
                                ON ContactGroup.groupId = Groups.id 
                            WHERE Contacts.id = ${id}
                            ORDER BY Contacts.name ASC`

    
        db.all(queryShow, function (err, data) {
            if (err) throw err
                callback(data)
        });
    }
}

module.exports = Contact;