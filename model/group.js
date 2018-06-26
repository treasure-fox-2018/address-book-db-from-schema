const db = require('../db');
db.get("PRAGMA foreign_keys = ON");

class Group {

  static create(name, callback) {
    db.run(`INSERT INTO Groups VALUES (null, "${name}")`);
    callback();
  }

  static update(id, columnName, value, callback) {
    db.get(`SELECT id FROM Groups WHERE id = "${id}"`, (err, data) => {
      if (err) console.log("no matching data");
      db.run(`UPDATE Groups SET ${columnName} = "${value}" WHERE id = ${data.id}`);
    });
    callback();
  }

  static delete(id, callback) {
    db.run(`DELETE FROM ContactsGroups WHERE groupId = "${id}"`);
    db.run(`DELETE FROM Groups WHERE id = "${id}"`);
    callback();
  }

  static show(callback) {
    db.all(`SELECT * FROM Groups`, (err, data) => {
      if (err) throw err;
      callback(data);
    });
  }
}

module.exports = Group;
