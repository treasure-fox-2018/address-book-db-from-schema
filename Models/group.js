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

    static findGroupByField(groupField, groupName, callback) {
        let findGroupByNameQuery = `SELECT * FROM groups WHERE "${groupField}" = "${groupName}"`

        db.all(findGroupByNameQuery, function(err, group) {
            if (err) throw err
            callback(group)
        })
    }

    static save(group, callback) {
        let insertGroupQuery = `INSERT INTO groups(name) VALUES ("${group.name}")`

        db.run(insertGroupQuery, function(err) {
            if (err) throw err
            callback()
        })
    }

    static update(groupUpdateField, groupInitialValue, groupUpdateValue, callback) {
        let updateGroupQuery = `UPDATE groups SET ${groupUpdateField} = "${groupUpdateValue}" WHERE ${groupUpdateField} = "${groupInitialValue}"`

        db.all(updateGroupQuery, function(err) {
            if (err) throw err
            callback()
        })
    }
}

module.exports = Group
