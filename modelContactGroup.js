const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');
const ContactGroup = require('./contactGroup');

class Model {
  static add(inputArr, cb){
    let contactId = inputArr[0];
    let groupId = inputArr[1];
    
    let newContactGroup = new ContactGroup (contactId, groupId);
    
    let query = `INSERT INTO ContactGroup (Contact_id, Group_id) VALUES (?, ?)`

    db.run (query, [contactId, groupId], (err)=> {
      if (err){
        cb (err, null);
      } else {
        Model.count((err, result) => {
          if(err){
            cb(err, null);
          } else {
            cb(null, [newContactGroup, result]);
          }
        })
      }
    })
  }

  static count (cb) {
    let query = `SELECT COUNT(id) AS total FROM ContactGroup`

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb(null, result)
      }
    })
  }

  static updateContactGroup (inputArr, cb){
    let id = inputArr[0];
    let updatedCol = inputArr[1];
    let updatedValue = inputArr[2];
    
    let query = `UPDATE ContactGroup SET '${updatedCol}' = '${updatedValue}' WHERE id = '${id}'`

    db.run (query,(err)=>{
      if (err){
        cb (err, null);
      } else {
        cb (null, 'Contact Group updated successfully')
      }
    })
  }
}

module.exports = Model;