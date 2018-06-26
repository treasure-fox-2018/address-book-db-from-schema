const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db')

class Group {
    static insertGroup(name, callback) {
        const queryInsertGroup = `INSERT INTO 'Group'(name) VALUES ('${name}')`
        const querySelectGroup = `SELECT * FROM 'Group'`

        db.serialize(function() {
            db.run(queryInsertGroup, function(err) {
                if(err) throw err
            })

            db.all(querySelectGroup, function(err, qSelectGroup) {
                if(err) throw err
                callback(qSelectGroup[qSelectGroup.length-1])
            })
        })
    }

    static updateGroup(groupUpdate, callback) {
        const queryGroupUpdate = `UPDATE 'Group' SET name = '${groupUpdate[1]}' WHERE id = ${groupUpdate[0]}`
        const selectGroup = `SELECT * FROM 'Group' WHERE id = ${groupUpdate[0]}`

        db.serialize(function() {
            db.run(queryGroupUpdate)
            db.all(selectGroup, function(err, qSelectGroup) {
                if(err) throw err
                callback(qSelectGroup)
            })
        })
        
    }
}

module.exports = Group