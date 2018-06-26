const Contact = require('./contact.js');
const Group = require('./group.js');
const ContactGroup = require('./contact-group.js');
const View = require('./view.js');

class Controller {

    static transferContacts() {
        Contact.transferContacts(function (output) {
            let message = `All contacts transferred to address book.`
            View.displayMessage(message)
        });

    }

    static createContact(name, company_name, phone_number, email) {
        Contact.createContact(name, company_name, phone_number, email, function(err, contact) {
            let message = `New contact added: ${name}`
            View.displayMessage(message)
        });
    }

    static transferGroups() {
        Group.transferGroups(function (output) {
            let message = `All groups transferred to address book.`
            View.displayMessage(message)
        });
    }

    static createGroup(name) {
        Group.createGroup(name, function (output) {
            let message = `New group added: ${group}`
            View.displayMessage(message)
        });
    }

}

module.exports = Controller;