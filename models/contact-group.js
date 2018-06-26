const db = require('../db');
const fs = require('fs');

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
            callback(true, `Data with Id ${this.lastID} has Successfully Added!`);
          }
        });
      });
    }
  }
}

module.exports = ContactGroup