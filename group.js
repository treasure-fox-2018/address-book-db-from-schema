const fs = require('fs');
const db = require('./db.js');

class Group {
    constructor(name) {
        this.id = null
        this.name = name
    }

    static transferGroups(callback) {
        
        let groups = JSON.parse(fs.readFileSync('datagroups.JSON', 'utf8'));
        // console.log(groups);
        db.serialize (function () {
            for (let i = 0; i < groups.length; i++) {
                const queryInput = `INSERT INTO Groups (name)
                                    VALUES ("${groups[i].name}")`
                db.run(queryInput, function (err) {
                    if (err) throw err
                    
                })
            }
            callback(`output`)
        })

    }

    static createGroup(name, callback) {
        let group = new Group(name)
        // console.log(group);
        const queryInput = `INSERT INTO Groups (name)
                            VALUES ("${group.name}")`

        db.run(queryInput, function (err) {
            if (err) throw err
            callback(group)
        });
    }

    static updateGroup(id, name, callback) {
        const queryUpdate = `UPDATE Groups
                             SET name = "${name}"
                             WHERE id = ${id}`

        db.run(queryUpdate, function (err) {
            if (err) throw err
            callback(`output`)
        });
    }

    static deleteGroup(id, name, callback) {
        const queryDelete = `DELETE FROM Groups
                             WHERE id = ${id} AND name = "${name}"`

        db.run(queryDelete, function (err) {
            if (err) throw err

            const queryUpdate = `UPDATE ContactGroup
                                SET groupId = NULL
                                WHERE groupId = ${id}`
                            
            db.run(queryUpdate, function (err) {
                if (err) throw err
                callback(`output`)
            })
        });
    }

    static showGroup(name, callback) {
        const queryShow = `SELECT Groups.name, contactId FROM Groups
                           JOIN ContactGroup ON Groups.id = ContactGroup.groupId 
                           WHERE Groups.name = "${name}"
                           ORDER BY Groups.id ASC`

        db.all(queryShow, function (err, data) {
            if (err) throw err
            callback(data)
        });
    }

    static assignContact(idGroup, idContact, callback) {

    }

}

module.exports = Group; 