const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./phone-contact.db')

db.serialize(function() {
  db.get("PRAGMA foreign_keys = ON")
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          phone TEXT UNIQUE,
          company TEXT,
          email TEXT UNIQUE)`, 
    function(err) {
      if (err) throw err
      console.log(`contacts table created`)
  })

  db.run(`CREATE TABLE IF NOT EXISTS groups (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE)`, 
    function(err) {
      if (err) throw err
      console.log(`groups table created`)
  })

  db.run(`CREATE TABLE IF NOT EXISTS contacts_groups (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          contact_id INTEGER,
          group_id INTEGER,
          FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE CASCADE,
          FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE)`,
    function(err) {
      if (err) throw err
      console.log(`contacts_groups table created`)
  })
})