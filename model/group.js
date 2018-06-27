const Group = require("../group")
const db = require("../db")

class GroupModel {
  static insert (name_group, callback) {
    const group = new Group (name_group)
    const queryInsertGroup = `INSERT INTO Groups (nameGroup) 
                                VALUES (
                                  "${group.name_group}"
                                )`
    
    db.run(queryInsertGroup, (err, data) => {
      if (err) throw err;
      const message = `Name group ${group.name_group} success insert to database`
      callback(message)
    })
    
  }

  static update (id, name_group, callback) {
    const idGroup = id
    const group = new Group (name_group)
    const queryUpdateGroup = `UPDATE Groups 
                                SET 
                                  name_group = "${group.name_group}" WHERE id = ${id}`

    db.run(queryUpdateGroup, (err, data) => {
      if (err) throw err;
      const message = `Name group id ${idGroup} success to update`
      callback(message)
    })
  }

  static delete (id, callback) {
    const queryDeleteGroup = `DELETE FROM Groups WHERE id = ${id}`
    const queryDeleteGroupContact = `DELETE FROM GroupContacts WHERE group_id = ${id}`
    db.run(queryDeleteGroup, err => {
      if (err) throw err;
    })
    db.run(queryDeleteGroupContact, err => {
      if (err) throw err;
    })
    db.all(`SELECT COUNT(*) AS total FROM Groups`, (err, data) => {
      if (err) throw err;
      const message = `Group id ${id} success delete. Total Group: ${data[0].total}`
      callback(message)
    })
  }

  static showGroup (callback) {
    const queryShowGroup = `SELECT nameGroup FROM Groups`
    db.all(queryShowGroup, (err, data) => {
      if (err) throw err;
      callback(data)
    })
  }
}

module.exports = GroupModel