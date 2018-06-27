const db = require("./db")

class Setup {
  static createTable () {
    const queryTableContact = `CREATE TABLE IF NOT EXISTS Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                              name VARCHAR(100), perusahaan VARCHAR (100), number_phone INTEGER UNIQUE, 
                              email VARCHAR(100) UNIQUE)`
    const queryTableGroup = `CREATE TABLE IF NOT EXISTS Groups (id INTEGER PRIMARY KEY AUTOINCREMENT,
                              nameGroup VARCHAR(100))`
    const queryTableGroupContact = `CREATE TABLE IF NOT EXISTS GroupContacts (id INTEGER PRIMARY KEY                                          AUTOINCREMENT, contact_id INTEGER, group_id INTEGER,
                                    FOREIGN KEY(contact_id) REFERENCES Contacts(id), 
                                    FOREIGN KEY(group_id) REFERENCES Groups(id))`
    db.serialize(() => {
      db.run(queryTableContact, (err, data) => {
        if (err) throw err
        console.log("Create Table Contacts Success");
      })

      db.run(queryTableGroup, (err, data) => {
        if (err) throw err;
        console.log("Create Table Groups Success");
      })

      db.run(queryTableGroupContact, (err, data) => {
        if (err) throw err;
        console.log("Create Table Group Contacts Success");
      })

    })
  }
}

Setup.createTable()

module.exports = Setup