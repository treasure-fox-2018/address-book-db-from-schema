'use strict'

const fs = require('fs')
const db = require('../setup.js')
class Group {
    constructor(name) {
        this.name = name
    }

    static readGroupsJSONFile(GroupFile, callback) {
        fs.readFile(GroupFile, 'utf8', function(err, groups) {
            if (err) throw err
              callback(JSON.parse(groups))
        })
    }

    static writeGroupToGroups(group) {
        let insertGroupQuery = `INSERT INTO groups(name) VALUES ("${group.name}")`

        db.run(insertGroupQuery, function(err) {
            if (err) throw err
        })
    }
}

module.exports = Group
