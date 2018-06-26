const db = require('../db');
const fs = require('fs');

class Contact {
  static createData(parameter, callback) {
    let queryCreate = `INSERT INTO contacts (name, company, phone_number, email) VALUES ("${parameter[0]}", "${parameter[1]}", "${parameter[2]}", "${parameter[3]}")`;

    db.run (queryCreate, function(errCreate) {
      if (errCreate) {
        callback ("Error Message :", errCreate);
      }
      else {
        callback(true, `Data Contacts has successfully added with id ${this.lastID}`);
      }
    })
  }

  static showDatabase (callback) {
    let queryAdd = `SELECT * FROM contacts`;

    db.all(queryAdd, function (errRead, data) {
      if (errRead) {
        callback ("Error Message :", errRead);
      }
      else {
        callback(true, data);
      }
    }) 
  }

  static deleteData(parameter) {
    let queryDelete = `DELETE FROM contacts WHERE id = ${parameter}`;

    db.run(queryDelete, function(errDelete) {
      if (errDelete) {
        callback ("Error Message :", errDelete);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  static update(parameter) {
    let queryUpdate = `UPDATE contacts SET ${parameter[0]} = "${parameter[1]}"`;

    db.run(queryUpdate, function(errUpdate) {
      if (errUpdate) {
        callback ("Error Message :", errUpdate);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  static csvToDatabase (callback) {
    let contactCsv = fs.readFileSync('./person.csv', 'utf8').split('\n');

    for (var i = 1; i <= contactCsv.length - 1; i++) {
      let dataCsv = contactCsv[i].split(',');
      let queryTransfer = `INSERT INTO contacts (name, company, phone_number, email) VALUES ("${dataCsv[1]}", "${dataCsv[2]}", "${dataCsv[3]}", "${dataCsv[4]}")`;
      console.log(dataCsv)
      db.serialize(function() {
        db.run(queryTransfer, function(err) {
          if (err) {
            callback("Error Message : ", err);
          }
          else {
            callback(true, `Data with Id ${this.lastID} has Successfully Added!`)
          }
        });
      });
    }
  }
}

module.exports = Contact