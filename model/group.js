const fs = require('fs')
const db  = require('./db')
db.get("PRAGMA foreign_keys = ON")

class Group {

  static importGroups(fileName,callback) {
    let arrGroups = fs.readFileSync('groups.csv').toString().split("\n");
    arrGroups.shift()
    db.serialize(function() {
      let stmt = db.prepare("INSERT INTO Groups (name) VALUES (?)", function (err) {
        if (err) callback(`error`, err)
      });
      for (let i = 0; i < arrGroups.length-1; i++) {
        const name = arrGroups[i]
        stmt.run(name, function (err) {
          if (err) callback(`error`, err)
        })
      }
      stmt.finalize(function (err) {
        if (err) callback(`error`, err)
        else callback (true, `${this.lastID} data from ${fileName} successfully imported to database`)
      })
    })
  }

  static create(name,callback) {
    const query = `INSERT INTO Groups (name) VALUES ("${name}")`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`new data group successfully added with id ${this.lastID}`)
    });
  }

  static delete(id, callback){
    const query = `DELETE FROM Groups WHERE id=${id}`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`data group id ${id} successfully deleted`)
    })
  }

  static update(id, name, callback) {
    const query = `UPDATE Groups
                    SET name = "${name}"
                    WHERE id= ${id}`
    db.run(query, function (err) {
      if (err) callback(`error`, err)
      else callback(true,`data group id ${id} successfully updated`)
    });
  }

  static show (callback) {
    db.all(`SELECT * FROM Groups`, function (err,data) {
      if (err) callback(`error`, err)
      else callback(true,data)
    })
  }
}

module.exports = Group