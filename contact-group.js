const fs = require('fs');
const db = require('./db.js');

class ContactGroup {
    constructor (contactId, groupId) {
        this.id = null
        this.contactId = contactId
        this.groupId = groupId
    }

    static transferContactGroup(callback) {
        let contactgroup = JSON.parse(fs.readFileSync('datacontactgroup.JSON', 'utf8'));
        // console.log(groups);
        db.serialize (function () {
            for (let i = 0; i < contactgroup.length; i++) {
                const queryInput = `INSERT INTO ContactGroup (contactId, groupId)
                            VALUES ("${contactgroup[i].contactId}", "${contactgroup[i].groupId}")`
                db.run(queryInput, function (err) {
                    if (err) throw err
                    
                })
            }
            callback(`output`)
        })
    }
}

module.exports = ContactGroup;