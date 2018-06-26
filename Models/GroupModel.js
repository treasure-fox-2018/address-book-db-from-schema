//your code here
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');
db.get("PRAGMA foreign_keys = ON")

class Group {
  constructor(groupname) {
    this.groupname = groupname
  }

  save(cb) {
    let query = `INSERT INTO Groups (groupname)
        VALUES ('${this.groupname}')`
    db.run(query, err => {
      if (err) throw err
      cb(this.groupname)
    })
  }


  update(id, param, value, cb) {
    db.run(`UPDATE Groups SET '${param}'=  '${value}' WHERE  id = '${id}'`, function (err) {
      if (err) throw err
      cb(id)
    })
  }
  //

  delete(id, cb) {
    let query = `DELETE FROM Groups where id = '${id}'`;
    db.all(`select groupname from Groups WHERE id = '${id}'`, function (err, data) {
      if (err) throw err
      db.run(query, function (err) {
        if (err) throw err
        cb(data[0].groupname)
        let queryconjungtion = `delete from GroupContacts WHERE id_group = '${id}'`
        db.run(queryconjungtion, function (err) {
          if (err) throw err
        })
      })
    })
  }
  //

  ShowGroup(cb) {
    let query = `select groupname, name, company, phone, email from Groups LEFT JOIN GroupContacts ON
Groups.id = GroupContacts.id_group
LEFT JOIN Contacts ON
Contacts.id = GroupContacts.id_contact`

    db.each(query, function (err, data) {
      if (err) throw err
      cb(data)
    })
  }

}

module.exports = Group
