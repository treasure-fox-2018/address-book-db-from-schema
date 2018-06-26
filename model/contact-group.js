const db = require('../db');
db.get("PRAGMA foreign_keys = ON");

class ContactGroup {

  static create(contactId, groupId, callback) {
    db.run(`INSERT INTO ContactsGroups VALUES (null, "${contactId}", "${groupId}")`);
    callback();
  }

  static update(id, columnName, value, callback) {
    db.get(`SELECT id FROM ContactsGroups WHERE id = "${id}"`, (err, data) => {
      if (err) console.log("no matching data");
      db.run(`UPDATE ContactsGroups SET ${columnName} = "${value}" WHERE id = ${data.id}`);
    });
    callback();
  }

  static delete(id, callback) {
    db.run(`DELETE FROM ContactsGroups WHERE id = "${id}"`);
    callback();
  }
}

module.exports = ContactGroup;
