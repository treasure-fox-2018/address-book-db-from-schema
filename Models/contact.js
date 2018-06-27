'use strict'

const fs = require('fs')
const db = require('../setup.js')
class Contact {
    constructor(name, phone_number, email, company_name) {
        this.name = name
        this.phone_number = phone_number
        this.email = email
        this.company_name = company_name
    }

    static findContactByField(contactField, contactFieldValue, callback) {
        let findContactByFieldQuery = `SELECT * FROM contacts WHERE "${contactField}" = "${contactFieldValue}"`

        db.all(findContactByFieldQuery, function(err, contact) {
            if (err) throw err
            callback(contact)
        })
    }

    static readContactsJSONFile(ContactFile, callback) {
        fs.readFile(ContactFile, 'utf8', function(err, contacts) {
            if (err) throw err
              callback(JSON.parse(contacts))
        })
    }

    static save(contact, callback) {
        let insertContactQuery = `INSERT INTO contacts(name, phone_number, email, company_name) VALUES ("${contact.name}", "${contact.phone_number}", "${contact.email}", "${contact.company_name}")`

        db.run(insertContactQuery, function(err) {
            if (err) throw err
            callback()
        })
    }

    static update(contactUpdateField, contactInitialValue, contactUpdateValue, callback) {
        let updateContactQuery = `UPDATE contacts SET ${contactUpdateField} = "${contactUpdateValue}" WHERE ${contactUpdateField} = "${contactInitialValue}"`

        db.run(updateContactQuery, function(err) {
            if (err) throw err
            callback()
        })
    }
}

module.exports = Contact
