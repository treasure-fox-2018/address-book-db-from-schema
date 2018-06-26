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
            // for (let i = 0; i < contacts.length; i++) {
            //     contacts[i] = contacts[i].split(',')
            // }
        
        // console.log(contacts)
        
        db.serialize (function () {
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
}

module.exports = Contact;