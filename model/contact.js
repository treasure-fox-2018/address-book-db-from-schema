"use strict"
const db = require('../db.js')

class Contact{
    static create(name,company,phoneNumber,email,cb){
        db.run(`INSERT INTO contacts VALUES("${name}","${company}","${phoneNumber}","${email}")`,function(err){
            if(err)throw err;
            else{
                cb(true)
            }
        })
    }

    static read(cb){
        db.all(`SELECT contacts.name,company,phoneNumber,email, groups.name AS groupName
        FROM contacts
        JOIN contactGroup ON contacts.id = contactGroup.contactID
        JOIN groups ON contactGroup.groupID = groups.id`,function(err,dataContacts){
            if (err) throw err;
            else{
                cb(dataContacts)
            }
        })
    }

    static update(id,column,value,cb){
        db.run(`UPDATE contacts SET "${column}" = "${id}" WHERE id = "${id}"`,function(err){
            if(err)throw err
            else{
                cb(true)
            }
        })
    }

    static delete(id,cb){
        db.run(`DELETE FROM contacts WHERE id = "${id}"`, function(err){
            if(err)throw err
            else{
                cb(true)
            }
        })
    }

}

module.exports = Contact;