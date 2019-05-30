const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');
const Contact = require('./contact');

class Model {

  static add(inputArr, cb){
    let name = inputArr[0];
    let phone_number = inputArr[1];
    let address = inputArr[2];
    let newContact = new Contact (name, phone_number, address);
    
    let query = `INSERT INTO Contacts (Contact_name, Phone_number, Address) VALUES (?,?,?)`

    db.run (query, [name, phone_number, address], (err)=>{
      if (err){
        cb (err, null);
      } else {
        Model.count((err, result) => {
          if(err){
            cb(err, null);
          } else {
            cb(null, [newContact, result[0].total]);
          }
        })
      }
    })
  }

  static count (cb) {
    let query = `SELECT COUNT(id) AS total FROM Contacts`

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
    let updatedCol = inputArr[1];
    let updatedValue = inputArr[2];
    
    let query = `UPDATE Contacts SET '${updatedCol}' = '${updatedValue}' WHERE id = '${id}'`;

    db.run (query,(err)=>{
      if (err){
        cb (err, null);
      } else {
        cb (null, `${updatedCol} updated successfully`);
      }
    })
  }

  static delete (inputArr, cb){
    let id = inputArr[0];
    
    let queryDeleteContact = `DELETE FROM Contacts WHERE id = '${id}'`
    let queryDeleteContactGroup = `DELETE FROM ContactGroup WHERE Contact_id = '${id}'`

    db.run (queryDeleteContact,(err)=>{
      if (err){
        cb (err, null);
      } else {
        db.run (queryDeleteContactGroup,(err)=>{
          if (err){
            cb (err, null);
          } else {
            cb (null, 'Contact deleted successfully')
          }
        })
      }
    })  
  }

  static show (inputArr, cb) {
    let id = inputArr[0];

    let query = `SELECT Contact_name, Phone_number, Address, Group_name FROM Contacts LEFT JOIN ContactGroup ON Contact_id = Contacts.id LEFT JOIN Groups ON Groups.id = Group_id WHERE Contacts.id = '${id}' GROUP BY Contact_name`;

    db.all(query, (err, result)=> {
      if (err){
        cb(err, null);
      } else {
        cb(null, result[0])
      }
    })
  }
}

module.exports = Model;