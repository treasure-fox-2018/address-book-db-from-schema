const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');
const Contact = require('./contact')
const Group = require('./group')
const ContactGroup = require('./contact-group')

class Model {

  static addContact(inputArr, cb){
    let name = inputArr[0];
    let phone_number = inputArr[1];
    let address = inputArr[2];
    let newContact = new Contact (name, phone_number, address);
    
    let query = `INSERT INTO Contacts (Contact_name, Phone_number, Address) VALUES (?,?,?)`

    db.run (query, [name, phone_number, address], (err)=>{
      if (err){
        cb (err, null);
      } else {
        Model.countContact((err, result) => {
          if(err === 'no error'){
            cb('no error', [newContact, result[0].totalContact]);
          } else {
            cb(err, null);
          }
        })
      }
    })
  }

  static countContact (cb) {
    let query = `SELECT COUNT(id) AS totalContact FROM Contacts`

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb('no error', result)
      }
    })
  }

  static updateContact (inputArr, cb){
    let id = inputArr[0];
    let updatedCol = inputArr[1];
    let updatedValue = inputArr[2];
    
    let query = `UPDATE Contacts SET '${updatedCol}' = '${updatedValue}' WHERE id = '${id}'`

    db.run (query,(err)=>{
      if (err){
        cb (err, null);
      } else {
        cb ('no error', 'Contact updated successfully')
      }
    })
  }

  static deleteContact (inputArr, cb){
    let id = inputArr[0];
    
    let queryDeleteContact = `DELETE FROM Contacts WHERE id = '${id}'`
    let queryDeleteContactGroup = `DELETE FROM ContactGroup WHERE Contact_id = '${id}'`

    db.serialize(() => {
      
      db.run (queryDeleteContact,(err)=>{
        if (err){
          cb (err, null);
        } else {
          cb ('no error', 'Contact deleted successfully')
        }
      })

      db.run (queryDeleteContactGroup,(err)=>{
        if (err){
          cb (err, null);
        } else {
          cb ('no error', 'Contact deleted from group successfully')
        }
      })
    })

  }

  static showContact (inputArr, cb) {
    let id = inputArr[0];

    let query = `SELECT * FROM Contacts LEFT JOIN ContactGroup LEFT JOIN Groups WHERE Contacts.id = '${id}'`

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb('no error', result[0])
      }
    })
  }

  static addGroup(inputArr, cb){
    let name = inputArr[0];
    
    let newGroup = new Group (name);
    
    let query = `INSERT INTO Groups (Group_name) VALUES ('${name}')`

    db.run (query, (err)=>{
      if (err){
        cb (err, null);
      } else {
        Model.countGroup((err, result) => {
          if(err === 'no error'){
            cb('no error', [newGroup, result[0].totalGroup]);
          } else {
            cb(err, null);
          }
        })
      }
    })
  }

  static countGroup (cb) {
    let query = `SELECT COUNT(id) AS totalGroup FROM Groups`

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb('no error', result)
      }
    })
  }

  static updateGroup (inputArr, cb){
    let id = inputArr[0];
    let updatedValue = inputArr[1];
    
    let query = `UPDATE Groups SET Group_name = '${updatedValue}' WHERE id = '${id}'`

    db.run (query,(err)=>{
      if (err){
        cb (err, null);
      } else {
        cb ('no error', 'Group updated successfully')
      }
    })
  }

  static deleteGroup (inputArr, cb){
    let id = inputArr[0];
    
    let queryDeleteGroup = `DELETE FROM Groups WHERE id = '${id}'`
    let queryDeleteContactGroup = `DELETE FROM ContactGroup WHERE Group_id = '${id}'`

    db.serialize(() => {
      
      db.run (queryDeleteGroup,(err)=>{
        if (err){
          cb (err, null);
        } else {
          cb ('no error', 'Group deleted successfully')
        }
      })

      db.run (queryDeleteContactGroup,(err)=>{
        if (err){
          cb (err, null);
        } else {
          cb ('no error', 'Group deleted from group successfully')
        }
      })
    })

  }

  static addContactGroup(inputArr, cb){
    let contactId = inputArr[0];
    let groupId = inputArr[1];
    
    let newContactGroup = new ContactGroup (contactId, groupId);
    
    let query = `INSERT INTO ContactGroup (Contact_id, Group_id) VALUES (${contactId}, ${groupId})`

    db.run (query, (err)=>{
      if (err){
        cb (err, null);
      } else {
        Model.countContactGroup((err, result) => {
          if(err === 'no error'){
            cb('no error', [newContactGroup, result[0].totalContactGroup]);
          } else {
            cb(err, null);
          }
        })
      }
    })
  }

  static countContactGroup (cb) {
    let query = `SELECT COUNT(id) AS totalContactGroup FROM ContactGroup`

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb('no error', result)
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
        cb ('no error', 'ContactGroup updated successfully')
      }
    })
  }

}

module.exports = Model;