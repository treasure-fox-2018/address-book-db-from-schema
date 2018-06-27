const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');
const Group = require('./group');

class Model {
  static add(inputArr, cb){
    let name = inputArr[0];
    
    let newGroup = new Group (name);
    
    let query = `INSERT INTO Groups (Group_name) VALUES (?)`

    db.run (query, [name], (err) => {
      if (err){
        cb (err, null);
      } else {
        Model.count ((err, result)=>{
          if (err){
            cb (err, null);
          } else {
            cb (null, [newGroup ,result])
          }
        })
      }
    })
  }

  static count (cb) {
    let query = `SELECT COUNT(id) AS total FROM Groups`

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb(null, result)
      }
    })
  }

  static update (inputArr, cb){
    let id = inputArr[0];
    let updatedValue = inputArr[1];
    
    let query = `UPDATE Groups SET Group_name = '${updatedValue}' WHERE id = '${id}'`

    db.run (query,(err)=>{
      if (err){
        cb (err, null);
      } else {
        cb (null, 'Group updated successfully')
      }
    })
  }

  static delete (inputArr, cb){
    let id = inputArr[0];
    
    let queryDeleteGroup = `DELETE FROM Groups WHERE id = '${id}'`
    let queryDeleteContactGroup = `DELETE FROM ContactGroup WHERE Group_id = '${id}'`

    db.run (queryDeleteGroup,(err)=>{
      if (err){
        cb (err, null);
      } else {
        db.run (queryDeleteContactGroup,(err)=>{
          if (err){
            cb (err, null);
          } else {
            cb (null, 'Group deleted successfully')
          }
        })
      }
    })
  }
}


module.exports = Model;