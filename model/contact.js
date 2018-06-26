const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./address_book.db');
db.get("PRAGMA foreign_keys = ON")

class Contact {
  constructor (obj) {
    this.id = obj.id
    this.name = obj.name
    this.company = obj.company
    this.phoneNumber = obj.phoneNumber
    this.email = obj.email
  }

  static create () {

  }

  static delete () {

  }

  static update () {

  }

  static show () {
    
  }
}