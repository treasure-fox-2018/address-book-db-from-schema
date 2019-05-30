const db = require('../db.js')

class ContactGroup {
  static read() {}
  static assign(query, callback) {
    db.run(`INSERT INTO contacts_groups VALUES (
            null, ${query.contactId}, ${query.groupId}
    )`, function(err) {
      if (err) throw err
      db.get(`SELECT contacts.name AS contact, groups.name AS groupName
              FROM contacts JOIN contacts_groups
              ON contacts.id = contacts_groups.contact_id
              JOIN groups ON groups.id = contacts_groups.group_id
              WHERE contacts_groups.contact_id = ${query.contactId}
              AND contacts_groups.group_id = ${query.groupId}`,
        function(err, row) {
          if (err) throw err
          callback(row)
        })
    })
  }
}

module.exports = ContactGroup