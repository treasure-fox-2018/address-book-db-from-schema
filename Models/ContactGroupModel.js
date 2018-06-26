//your code here
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');
db.get("PRAGMA foreign_keys = ON")

class ContactGroup {
  constructor(id_contact, id_group) {
    this.idcontact = id_contact
    this.idgroup = id_group
  }

  Assign(kontak, cb) {
    let query = `INSERT INTO GroupContacts (id_contact, id_group)
        VALUES ('${this.idcontact}', '${this.idgroup}')`
    db.run(query, err => {
      if (err) throw err
      let siapa = `select groupname, name from Groups JOIN GroupContacts ON
Groups.id = GroupContacts.id_group
 JOIN Contacts ON
Contacts.id = GroupContacts.id_contact WHERE Contacts.id = ${kontak}`
      db.all(siapa, function (err, who) {
        cb(who[0])

      })

    })
  }


}

module.exports = ContactGroup
