const ModelContact = require('../model/contactModel')
const View = require('../view/view.js')

class Contact {

    static insertContact(content) {
        ModelContact.insertContact(content, function(dataInsert) {
            View.insertContact(dataInsert);
        })
    }

    static updateContact(contentUpdate) {
        ModelContact.updateContact(contentUpdate, function(dataUpdate) {
            View.updateContact(dataUpdate);
        })
    }

    static showContact() {
        ModelContact.showContact(function(dataContact) {
            View.showContact(dataContact)
        })
    }

    static deleteContact(idContact) {
        ModelContact.deleteContact(idContact ,function(deletedContact) {
            View.deleteContact(deletedContact)
        })
    }
}

module.exports = Contact