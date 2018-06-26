const db = require('../db');
const fs = require('fs');

class Group {
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
            callback(true, `Data with Id ${this.lastID} has Successfully Added!`);
          }
        });
      });
    }
  }
}

module.exports = Group