const db = require('../db.js')

class Group {
  constructor(obj) {
    this.id = obj.id || null
    this.name = obj.name
  }

  static create(obj, callback) {
    db.run(`INSERT INTO groups VALUES (
            null, "${obj.name}")`, function(err) {
      if (err) throw err
      console.log(this.lastID)
      callback(this.lastID)
    })
  }

  static update(query, callback) {
    db.run(`UPDATE groups SET name = "${query.name}"
            WHERE id = ${query.id}`, function(err) {
      if (err) throw err
      db.get(`SELECT * FROM groups WHERE id = ${query.id}`, function(err, row) {
        if (err) throw err
        let group = new Group(row)
        callback(group)
      })
    })
  }

  static read(callback) {
    db.all(`SELECT * FROM groups`, function(err, groups) {
      if (err) throw err
      for (let i = 0; i < groups.length; i++) {
        groups[i] = new Group(groups[i])
      }
      callback(groups)
    })
  }

  static findOne(query, callback) {
    db.get(`SELECT * FROM groups
            WHERE ${query.column} = '${query.value}'`,
    function(err, row) {
      if (err) throw err;
      if (row === undefined) {
        callback(row)
      } else {
        let group = new Group(row)
        // console.log(group)
        callback(group);
      }
    })
  }
}

module.exports = Group