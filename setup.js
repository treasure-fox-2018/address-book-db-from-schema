const db = require('./db');

function create () {
  db.serialize (function () {
    db.run (`CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) UNIQUE, company VARCHAR(100), phone_number VARCHAR(50),
            email VARCHAR(100))`, function(err) {
                if(err) {
                        console.log(`Error Message : `, err)
                }
        });

    db.run(`CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) UNIQUE)`, function(err) {
                if(err) {
                        console.log(`Error Message : `, err)
                }
        });

    db.run(`CREATE TABLE IF NOT EXISTS contact_group (id INTEGER PRIMARY KEY AUTOINCREMENT,
            contact_id INTEGER, group_id INTEGER, FOREIGN KEY (contact_id) REFERENCES contacts(id),
            FOREIGN KEY (group_id) REFERENCES groups(id))`, function(err) {
                if(err) {
                        console.log(`Error Message : `, err)
                }
        });
    
  });
}

create ();