let db = require('./db')
let fs = require('fs')

class Contact{
    static list(callback){
        db.all(`SELECT * FROM Contacts`, function(err, contacts){
            if(err){ 
                callback(err)
            } else {
                callback(contacts)
            }
        })
    }

    static add(data, callback){
        db.run(`INSERT INTO Contacts (name, company, phone_number, email) VALUES (?,?,?,?)`,[data[0], data[1], data[2], data[3]],function(err, contact){
            if(err){ 
                callback(err)
            } else {
                let obj = {
                    name: data[0],
                    company: data[1],
                    phone_number: data[2],
                    email: data[3]
                }

                Contact.list(function (contactTable, errList){
                    if(errList){
                        callback(errList)
                    } else {
                        callback({contactPerson: obj, totalContact: contactTable.length})
                    }
                })
            }
        })
    }

    static update(data, callback){
        db.run(`UPDATE Contacts SET ${data[1]} = ? WHERE id = ?`,[ data[2],data[0]], function(err){
            if(err) {
                throw err
            } else {
                callback(data[0])
            }
        })
    }

    static delete(data, callback){
        db.run(`DELETE FROM Contacts WHERE id = ?`,data, function(err){
            if(err){
                callback(err)
            } else {
                callback(`Data has been deleted`)
            }
        })
    }
}

class Group{
    static list(callback){
        db.all(`SELECT * FROM Groups`, function(err, contacts){
            if(err){ 
                callback(err)
            } else {
                callback(groups)
            }
        })
    }

    static add(name,callback){
        db.run(`INSERT INTO Groups (name) VALUES (?)`,name,function(err,result){
            if(err){ 
                callback(err)
            } else {
                callback(`Group with name ${name} is successfully added`)
            }
        })
    }

    static update(name){
        db.run(`UPDATE Groups SET nama = ? WHERE id = ?`,[ data[1],data[0]], function(err){
            if(err) {
                throw err
            } else {
                callback(data[0])
            }
        })
    }

    static delete(id,callback){
        db.run(`DELETE FROM Groups WHERE id = ?`,data, function(err){
            if(err){
                callback(err)
            } else {
                db.run(`DELETE FROM Contact_group WHERE GroupId = ?`, id, function(err){
                    if(err){
                        callback(err)
                    } else{
                        callback(`Group has been deleted and all contact on group is successfully unassigned`)
                    }
                })
            }
        })

    }
}

class ContactGroup{

}

module.exports = [Contact, Group, ContactGroup]