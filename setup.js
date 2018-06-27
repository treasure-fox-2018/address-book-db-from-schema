let db = require('./db')
let fs = require('fs')

class createTable{
    static contact(){
        db.run(`CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR, company VARCHAR, phone_number INTEGER(12) UNIQUE, email VARCHAR UNUIQUE)`, function(err){
                    if(err){
                        console.log('ERROR Message :', err.message)
                    } else {
                     console.log("Sucessfully create table Contact")
                    }
                })
    }

    static group(){
        db.run(`CREATE TABLE IF NOT EXISTS Groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR UNIQUE)`, function(err){
                    if(err){
                        console.log('ERROR Message :', err.message)
                    } else {
                        console.log("Sucessfully create table Group")
                    }
                })
    }

    static contactGroup(){
        db.run(`CREATE TABLE IF NOT EXISTS Contact_group (id INTEGER PRIMARY KEY AUTOINCREMENT,
                contactId VARCHAR, groupId VARCHAR, FOREIGN KEY(contactId) REFERENCES Contacts(id), 
                FOREIGN KEY(groupId) REFERENCES Groups(id))`, function(err){
                    if(err){
                        console.log('ERROR Message :', err.message)
                    } else {
                        console.log("Sucessfully create table Contact_group")
                    }
                })
    }
}

createTable.contact()
createTable.group()
createTable.contactGroup()