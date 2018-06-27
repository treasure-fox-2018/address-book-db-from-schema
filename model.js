const db = require('./db');
const fs = require('fs')

class Contacts {
    static convertCSV(){
        let file = fs.readFileSync('./contacts.csv').toString().split('\n');
        for (let i = 0; i < file.length; i++) {
            let person = file[i].split(',')
            let query = `INSERT INTO Contacts (name,perusahaan,nomer_telepon,email) VALUES ("${person[1]}","${person[2]}","${person[3]}","${person[4]}")`
            db.run(query,function(err){
                if (err) throw err
            })
        }
    }

    static createContact(name,perusahaan,nomer_telepon,email,callback){
        let create_query = `INSERT INTO Contacts (name,perusahaan,nomer_telepon,email) VALUES ("${name}","${perusahaan}","${nomer_telepon}","${email}")`

        db.run(create_query,function(err){
            if(err) {
                callback(err,null)
            }else {
                let obj = {
                    name: name,
                    perusahaan: perusahaan,
                    nomer_telepon: nomer_telepon,
                    email: email
                }
                callback(err,obj)
            }
        })
    }

    static updateContact(id,name,perusahaan,nomer_telepon,email,callback){
        let update_query = `UPDATE Contacts SET name = "${name}",
                                                perusahaan = "${perusahaan}",
                                                nomer_telepon = "${nomer_telepon}",
                                                email = "${email}"
                                                WHERE kontakId = ${id}`
                        
        db.run(update_query,function(err){
            if (err) {
                callback(err,null)
            }else {
                callback(err,`Data with id : ${id} has been updated`)
            }
        })
    }

    static deleteContact(id,callback){
        let delete_query = `DELETE FROM Contacts WHERE KontakId = "${id}"`

        db.run(delete_query,function(err){
            if (err){
                callback(err,null)
            }else {
                callback(err,`Data with id : ${id} has been Deleted`)
            }
        })
    }
}

Contacts.convertCSV()



module.exports = Contacts