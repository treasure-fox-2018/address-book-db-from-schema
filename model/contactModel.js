var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("./address.db");

class Contact{

    static create(name,company,phone_number,email,cb){
        let query = `INSERT INTO Contacts(name,company,phone_number,email) VALUES("${name}","${company}","${phone_number}","${email}")`
        db.run(query,function(err){
            if(err){
                throw err
            }else{
                let data = `SELECT * FROM Contacts WHERE name = "${name}"`
                db.all(data,function(err,data){
                    if(err){
                        throw err
                    }else{
                        cb(data)
                    }
                })
            }
        })
    }

    static update(id,column,value,cb){
        let query =`UPDATE Contacts SET ${column} = "${value}" WHERE id = ${id}`
        db.run(query,function(err,data){
            if(err){
                throw err
            }else{
                cb(data)
            }
        }) 
    }

    static delContact(id,cb){
        let data = `SELECT * FROM Contacts WHERE id = ${id}`
        db.all(data,function(err,dataContact){
            if(err){
                throw err
            }else{
                let query =`DELETE FROM Contacts WHERE id = ${id}`
                db.run(query,function(err){
                    if(err){
                        throw err
                    }else{
                        cb(dataContact)
                    }
                })
            }
        })
        

    }

    static showData(cb){
        let query =`SELECT Contacts.name AS name,company,phone_number,
        email,Groups.name AS group_name FROM Contacts
        JOIN ContactGroup ON Contacts.id = ContactGroup.contact_id
        JOIN Groups ON ContactGroup.group_id = Groups.id`
        db.all(query,function(err,data){
            if(err){
                throw err
            }else{
                cb(data)
            }
        })
    }
}

module.exports = Contact