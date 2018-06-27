const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

class Group {
  constructor(obj) {
    this.id = obj.id || null;
    this.name = obj.name || null;
  }
  add() {
    let group = this;
    let query = `INSERT INTO groups (name) VALUES ('${this.name}');`;
    db.run(query, function(err) {
      group.id = this.lastID;
      console.log('Successfully add new group');
    });
  }

  delete() {
    let group = this;
    let query = `DELETE FROM groups WHERE id = '${this.id}';`;
    db.run(query, function(err) {
      console.log(`Successfully delete group id: ${group.id}`);
    });
  }

  update() {
    let group = this;
    db.run(`UPDATE groups SET name = '${this.name}' WHERE id = '${this.id}';`);
    console.log(`Successfully update contact id: ${group.id}`);
  }

  show() {
    db.all(`SELECT groups.*, contacts.name AS contact_name FROM groups
          JOIN contacts_groups ON contacts_groups.group_id = groups.id
          JOIN contacts ON contacts.id = contacts_groups.contact_id
          WHERE groups.id = ${this.id};`, (err, group) => {
            console.log(group);
          });
  }
}

module.exports = Group;
