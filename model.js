var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db')
let fs = require('fs')
let Controller = require('./controller')
let Contacts = require('./contact')




class Groups {
    constructor(nama) {
        this._nama = nama
    }
}

class GroupsContact {
    constructor(nama) {
        this._nama = nama
    }
}



class Model {

    static queryAll(query, callback) {
        let runQuery = query
        db.all(runQuery, function (err, data) {
            if (err) throw err
            callback(data)
        })

    }

    static queryGet(query, callback) {
        let runQuery = query
        db.get(runQuery, function (err, data) {
            if (err) throw err
            callback(data)
        })
    }

    static queryRun(query, callback) {
        let runQuery = query
        db.run(runQuery, function (err, data) {
            if (err) throw err
            callback(data)
        })
    }

    static queryEach(query, callback) {
        let runQuery = query
        db.each(runQuery, function (err, data) {
            if (err) throw err
            callback(data)
        })
    }

    static m_create(row1, row2, row3, row4, callback) {
        let contacts = new Contacts(row1, row2, row3, row4)
        Model.queryRun(`INSERT INTO Contacts (nama,perusahaan,noTelfon,email)
        VALUES ("${row1}","${row2}","${row3}","${row4}")`, function (addContacts) {
                let message = `save contact Success ${JSON.stringify(contacts)}`;
                callback(message)
            })
    }

    static m_update(id, row1, row2, row3, row4, callback) {
        let contacts = new Contacts(id, row1, row2, row3, row4)
        Model.queryAll(`UPDATE Contacts 
        SET nama="${row1}",
        perusahaan ="${row2}",
        noTelfon ="${row3}",
        email="${row4}"
        WHERE id ="${id}"`, function (edit) {
                let message = `contact ${JSON.stringify(contacts._nama)} has been edited`
                callback(message)
            })
    }

    static m_delete(id, callback) {
        let contacts = new Contacts(id)
        Model.queryEach(`DELETE FROM Contacts WHERE id ="${id}"`, function (deleteId) {
        })
        let message = `contact number ${id} has been deleted`
        callback(message)

    }

    static m_showContact(callback) {

        Model.queryAll(`SELECT * FROM Contacts`, function (data) {

            let message = `Here is all the contacts`
            callback(console.log(data))

        })

    }

    static m_createGroup(namaGroup, callback) {

        db.serialize(function () {
            let tableName=namaGroup
            Model.queryRun(`CREATE TABLE IF NOT EXISTS ${tableName}
            (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
             nama varchar(20))`, function (createTable) {
                    let message = 'finished creating table'
                    callback(message)
                })
        })

    }


}
module.exports = Model
