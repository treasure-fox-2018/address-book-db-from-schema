const db = require('../db');
db.get("PRAGMA foreign_keys = ON");

class Contact {

  static create(name, company, phone, email, callback) {
    db.run(`INSERT INTO Contacts VALUES (null, "${name}", "${company}", "${phone}", "${email}")`);
    callback();
  }

  static update(id, columnName, value, callback) {
    db.get(`SELECT id FROM Contacts WHERE id = "${id}"`, (err, data) => {
      if (err) console.log("no matching data");
      db.run(`UPDATE Contacts SET ${columnName} = "${value}" WHERE id = ${data.id}`);
    });
    callback();
  }

  static delete(id, callback) {
    db.run(`DELETE FROM ContactsGroups WHERE contactId = "${id}"`);
    db.run(`DELETE FROM Contacts WHERE id = "${id}"`);
    callback();
  }

  static show(callback) {
    db.all(`SELECT Contacts.id, Contacts.company_name, Contacts.phone_number, Contacts.email_address, Groups.group_name FROM Contacts, ContactsGroups, Groups
WHERE Contacts.id = ContactsGroups.contactId AND ContactsGroups.groupId = Groups.id`, (err, data) => {
      if (err) throw err;
      callback(data);
    });
  }
}

module.exports = Contact;
