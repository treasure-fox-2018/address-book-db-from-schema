const fs = require('fs');

class ContactGroup {
    constructor (id, contactId, groupId) {
        this.id = id
        this.contactId = contactId
        this.groupId = groupId
    }
}

module.exports = ContactGroup;