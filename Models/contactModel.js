//your code here
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');


class Contact {
  constructor(name, company, phone, email) {
    this.name = name
    this.company = company
    this.phone = phone
    this.email = email

  }

  save(cb) {
    let query = `INSERT INTO Contacts (name, company, phone, email)
        VALUES ('${this.name}', '${this.company}','${this.phone}', '${this.email}')`
    db.run(query, err => {
      if (err) throw err
      cb(this.name)
    })
  }




  update(id, param, value, cb) {
    db.run(`UPDATE Contacts SET '${param}'=  '${value}' WHERE  id = '${id}'`, function (err) {
      if (err) throw err
      cb(id)
    })
  }

  delete(id, cb) {
    let query = `DELETE FROM Contacts where id = '${id}'`;

    db.all(`select name from Contacts WHERE id = '${id}'`, function (err, data) {
      if (err) throw err
      db.run(query, function (err) {
        if (err) throw err
        cb(data[0].name)
        let queryconjungtion = `delete from GroupContacts WHERE id_contact = '${id}'`
        db.run(queryconjungtion, function (err) {
          if (err) throw err
        })
      })
    })
    //cb(this.changes)
  }



  ShowContact(cb) {
    let query = `select name, company, phone, email, groupname from Contacts
LEFT JOIN GroupContacts ON
GroupContacts.id_contact = Contacts.id
LEFT JOIN Groups ON
Groups.id = GroupContacts.id_group`

    db.each(query, function (err, data) {
      if (err) throw err
      cb(data)
    })
  }






}

module.exports = Contact
