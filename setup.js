//contact: id, name, perusahaan, phone, email
//group: id, groupname
// groupcontact :id, id_contact , id_group
//your code here
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');

function create_and_seed() {
  db.serialize(function () {


    db.run(`CREATE TABLE IF NOT EXISTS Contacts
          (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100) UNIQUE,
          company VARCHAR(50), phone VARCHAR(100), email VARCHAR(30) UNIQUE )`);


    db.run(`CREATE TABLE IF NOT EXISTS Groups
                (id INTEGER PRIMARY KEY AUTOINCREMENT, groupname VARCHAR(50) UNIQUE )`);


    db.run(`CREATE TABLE IF NOT EXISTS GroupContacts
            (id INTEGER PRIMARY KEY AUTOINCREMENT, id_contact INTEGER,
            id_group INTEGER, FOREIGN KEY(id_contact) REFERENCES Contacts(id), FOREIGN KEY(id_group) REFERENCES Groups(id) )`);



  })
}

create_and_seed()
