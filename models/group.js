const db = require('../db');
const fs = require('fs');
db.get("PRAGMA foreign_keys = ON");

class Group {
  static csvToDatabase (callback) {
    let groupCsv = fs.readFileSync('./group.csv', 'utf8').split('\n');

    for (var i = 1; i <= groupCsv.length - 1; i++) {
      let dataCsv = groupCsv[i].split(',');
      let queryTransfer = `INSERT INTO groups (name) VALUES ("${dataCsv[1]}")`;
      db.serialize(function() {
        db.run(queryTransfer, function(err) {
          if (err) {
            callback("Error Message : ", err);
          }
          else {
            callback(true, `Data Group with Id ${this.lastID} has Successfully Added!`);
          }
        });
      });
    }
  }

  static createData(parameter, callback) {
    let queryCreate = `INSERT INTO groups (name) VALUES ("${parameter[0]}")`;

    db.run (queryCreate, function(errCreate) {
      if (errCreate) {
        callback ("Error Message :", errCreate);
      }
      else {
        callback(true, `Data Group has successfully added with id ${this.lastID}`);
      }
    })
  }

  static showDatabase (callback) {
    let queryAdd = `SELECT * FROM groups`;

    db.all(queryAdd, function (errRead, data) {
      if (errRead) {
        callback ("Error Message :", errRead);
      }
      else {
        callback(true, data);
      }
    }) 
  }

  static updateDataGroup (parameter, callback) {
    let queryUpdate = `UPDATE groups SET ${parameter[1]} = "${parameter[2]}" WHERE id = "${parameter[0]}"`;
  
    db.run(queryUpdate, function(errUpdate) {
      if (errUpdate) {
        callback ("Error Message :", errUpdate);
      }
      else {
        callback(true, this.changes);
      }
    })
  }

  static deleteDataGroup (parameter) {
    let queryDelete = `DELETE FROM groups WHERE id = "${parameter[0]}"`;

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
}

module.exports = Group