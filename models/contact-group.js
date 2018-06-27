const db = require('../db');
const fs = require('fs');
db.get("PRAGMA foreign_keys = ON");


class ContactGroup {
  static createData(parameter, callback) {
    let queryCreate = `INSERT INTO contact_group (contact_id, group_id) VALUES ("${parameter[0]}", "${parameter[1]}")`;

    db.run (queryCreate, function(errCreate) {
      if (errCreate) {
        callback ("Error Message :", errCreate);
      }
      else {
        callback(true, `Data Contact_Group has successfully added with id ${this.lastID}`);
      }
    })
  }

  static updateDataContactGroup (parameter, callback) {
    let queryUpdate = `UPDATE contact_group SET ${parameter[1]} = "${parameter[2]}" WHERE id = "${parameter[0]}"`;
  
    db.run(queryUpdate, function(errUpdate) {
      if (errUpdate) {
        callback ("Error Message :", errUpdate);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  static updateToNullContact (parameter, callback) {
    let queryUpdateToNull = `UPDATE contact_group SET contact_id = NULL WHERE contact_id = "${parameter[0]}"`;
  
    db.run(queryUpdateToNull, function(errUpdate) {
      if (errUpdate) {
        callback ("Error Message :", errUpdate);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  static updateToNullGroup (parameter, callback) {
    let queryUpdateToNull = `UPDATE contact_group SET group_id = NULL WHERE group_id = "${parameter[0]}"`;
  
    db.run(queryUpdateToNull, function(errUpdate) {
      if (errUpdate) {
        callback ("Error Message :", errUpdate);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  static deleteDataContactGroup (parameter, callback) {
    let queryDelete = `DELETE FROM contact_group WHERE id = "${parameter[0]}"`;

    // console.log(parameter)
    db.run(queryDelete, function(errDelete) {
      if (errDelete) {
        callback ("Error Message :", errDelete);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  
  static csvToDatabase (callback) {
    let group_contactCsv = fs.readFileSync('./group_contact.csv', 'utf8').split('\n');

    for (var i = 1; i <= group_contactCsv.length - 2; i++) {
      let dataCsv = group_contactCsv[i].split(',');
      let queryTransfer = `INSERT INTO contact_group (contact_id, group_id) VALUES ("${dataCsv[1]}", "${dataCsv[0]}")`;
      // console.log(dataCsv)
      db.serialize(function() {
        db.run(queryTransfer, function(err) {
          if (err) {
            callback("Error Message : ", err);
          }
          else {
            callback(true, `Data Contact Group with Id ${this.lastID} has Successfully Added!`);
          }
        });
      });
    }
  }
}

module.exports = ContactGroup