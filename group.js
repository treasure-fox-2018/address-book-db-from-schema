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
        const queryInput = `INSERT INTO Groups (name)
                            VALUES ("${group.name}")`

        db.run(queryInput, function (err) {
            if (err) throw err
            callback(group)
        });
    }

}

module.exports = Group;