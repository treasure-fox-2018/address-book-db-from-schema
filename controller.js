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
        Group.createGroup(name, function (err, output) {
            let message = `New group added: ${name}`
            View.displayMessage(message)
        });
    }

    static transferContactGroup() {
        ContactGroup.transferContactGroup(function (output) {
            let message = `Successfully transferred.`
            View.displayMessage(message)
        });
    }

    static updateContact(id, name, company_name, phone_number, email) {
        Contact.updateContact(id, name, company_name, phone_number, email, function (output) {
            let message = `Contact id: ${id}: "${name}" has been updated.`
            View.displayMessage(message)
        });
    }

    static updateGroup(id, name) {
        Group.updateGroup(id, name, function (output) {
            let message = `Group name has been changed to "${name}".`
            View.displayMessage(message)
        });
    }
    
    static deleteContact(id, name) {
        Contact.deleteContact(id, name, function (output) {
            let message = `Contact named ${name} has been deleted from address book.`
            View.displayMessage(message)
        });
    }

    static showContact(id) {
        Contact.showContact(id, function (output) {
            let message = output
            View.displayMessage(message)
        });
    }

    static deleteGroup(id, name) {
        Group.deleteGroup(id, name, function (output) {
            let message = `Group ${id}: "${name}" has been deleted.`
            View.displayMessage(message)
        });
    }

    static showGroup(name) {
        Group.showGroup(name, function (output) {
            let message = output
            View.displayMessage(message)
        });
    }

    static assignContact(ContactName, GroupName) {
        Contact.assignContact(ContactName, GroupName, function (output) {
            let message = `"${ContactName}" has succesfully been added to "${GroupName}"`
            View.displayMessage(message)
        });
    }
}

module.exports = Controller;