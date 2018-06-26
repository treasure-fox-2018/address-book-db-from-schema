"use strict"
const db = require('../db.js')

class Group {

    static create(name,cb){
        db.run(`INSERT INTO groups VALUES("${name}")`,function(err){
            if(err)throw err;
            else{
                cb(true)
            }
        })
    }

    static read(cb){
        db.all(`SELECT groups.name AS groupName,contacts.name,company,phoneNumber,email
        FROM groups
        JOIN contactGroup ON groups.id = contactGroup.groupID
        JOIN contacts ON contactGroup.contactID = contacts.id`,function(err,datagroups){
            if (err) throw err;
            else{
                cb(datagroups)
            }
        })
    }

    static update(id,column,value,cb){
        db.run(`UPDATE groups SET "${column}" = "${id}" WHERE id = "${id}"`,function(err){
            if(err)throw err
            else{
                cb(true)
            }
        })
    }

    static delete(id,cb){
        db.run(`DELETE FROM groups WHERE id = "${id}"`, function(err){
            if(err)throw err
            else{
                cb(true)
            }
        })
    }
}

module.exports = Group; 