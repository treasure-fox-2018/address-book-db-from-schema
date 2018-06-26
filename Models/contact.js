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

    static readContactsJSONFile(ContactFile, callback) {
        fs.readFile(ContactFile, 'utf8', function(err, contacts) {
            if (err) throw err
              callback(JSON.parse(contacts))
        })
    }

    static save(contact) {
        let insertContactQuery = `INSERT INTO contacts(name, phone_number, email, company_name) VALUES ("${contact.name}", "${contact.phone_number}", "${contact.email}", "${contact.company_name}")`

        db.run(insertContactQuery, function(err) {
            if (err) throw err
        })
    }
}

module.exports = Contact
