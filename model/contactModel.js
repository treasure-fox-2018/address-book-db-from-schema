const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db')

class Contact {


    static insertContact(content, callback) {
        // content = [name, company, phone, email]
        const queryInsertContact = `INSERT INTO Contact (name, company, phone, email)
            VALUES('${content[0]}', '${content[1]}', ${content[2]}, '${content[3]}')`
        const queryShow = `SELECT * FROM Contact WHERE name = '${content[0]}'`
        
        db.serialize(function() {
            db.run(queryInsertContact)
            db.all(queryShow, function(err, qShow) {
                if(err) throw err
                callback(qShow[qShow.length-1])
            })
        })
    }

    static updateContact(contentUpdate, callback) {
        const queryContactUpdate = `UPDATE Contact 
        SET name = '${contentUpdate[1]}',
            company = '${contentUpdate[2]}',
            phone = '${contentUpdate[3]}',
            email = '${contentUpdate[4]}'
        WHERE id = '${contentUpdate[0]}'`
        const selectContact = `SELECT * FROM Contact WHERE id = ${contentUpdate[0]}`

        db.serialize(function() {
            db.run(queryContactUpdate)
            db.all(selectContact, function(err, qSelectContact) {
                if(err) throw err
                callback(qSelectContact)
            })
        })
    }

    static showContact(callback) {
        const queryShowContact = `SELECT * FROM Contact`

        db.serialize(function() {
            db.all(queryShowContact, function(err, qShowContact) {
                if(err) throw err
                callback(qShowContact)
            })
        })
    }

    static deleteContact(idContact, callback) {
        const queryDeleteContact = `DELETE FROM Contact WHERE id = ${idContact}`
        const selectDelete = `SELECT * FROM Contact WHERE id = ${idContact}`

        db.serialize(function() {
            db.all(selectDelete, function(err, qselect) {
                if(err) throw err
                callback(qselect[0])
            })
            db.run(queryDeleteContact)
        })

    }
}

module.exports = Contact