const db = require('../db.js')

class Contact {
  constructor(obj) {
    this.id = obj.id || null
    this.name = obj.name
    this.phone = obj.phone
    this.company = obj.company
    this.email = obj.email
  }

  static create(obj, callback) {
    db.run(`INSERT INTO contacts VALUES (
            null,
            "${obj.name}",
            "${obj.phone}",
            "${obj.company}",
            "${obj.email}"
    )`, function(err) {
      if (err) throw err;
      callback(this.lastID)
    })
  }

  static read(callback) {
    db.all(`SELECT contacts.*, groups.name AS groupName FROM contacts
            LEFT JOIN contacts_groups ON contacts.id = contacts_groups.contact_id
            LEFT JOIN groups ON contacts_groups.group_id = groups.id`,
      function(err, data) {
        if (err) throw err
        callback(data)
      })
  }

  static update(query, callback) {
    db.run(`UPDATE contacts SET
            ${query.column} = "${query.value}"
            WHERE id = ${query.id}`, function(err) {
      if (err) throw err
      db.get(`SELECT * FROM contacts WHERE id = ${query.id}`, function(err, data) {
        if (err) throw err
        callback(data)
      })
    })
  }

  static delete() {

  }

  static findOne(query, callback) {
    db.get(`SELECT * FROM contacts 
            WHERE ${query.column} = '${query.value}'`,
    function(err, row) {
      if (err) throw err;
      callback(row);
    })
  }
}

module.exports = Contact