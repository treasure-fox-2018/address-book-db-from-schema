const db = require('./db');
const fs = require('fs');
db.get("PRAGMA foreign_keys = ON");


var contacts = fs.readFileSync("contacts.csv").toString().split("\n");
var groups = fs.readFileSync("groups.csv").toString().split("\n");
var contactsGroups = fs.readFileSync("contacts-groups.csv").toString().split("\n");

for (var i = 1; i < contacts.length - 1; i++) {
  // console.log(contacts[i]);
  var contact = contacts[i].split("|");
  // console.log(politician);
  db.run(`INSERT INTO Contacts VALUES (null, "${contact[0]}", "${contact[1]}", "${contact[2]}", "${contact[3]}")`, (err) => {
    console.log("data partially not inserted due to duplicate value(s)");
  });
}

for (var i = 1; i < groups.length - 1; i++) {
  var group = groups[i];
  // console.log(voter);
  db.run(`INSERT INTO Groups VALUES (null, "${group}")`);
}

for (var i = 1; i < contactsGroups.length - 1; i++) {
  var junction = contactsGroups[i].split("|");
  // console.log(vote);
  db.run(`INSERT INTO ContactsGroups VALUES (null, "${junction[0]}", "${junction[1]}")`);
}
