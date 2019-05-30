const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./phone-contact.db')

module.exports = db