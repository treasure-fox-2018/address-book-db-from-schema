const fs = require('fs')
const db = require('./db')

const contacts = fs.readFileSync('contacts.csv').toString().split('\n')
const groups = fs.readFileSync('groups.csv').toString().split('\n')
const contactGroup = fs.readFileSync('contact-group.csv').toString().split('\n')

db.serialize(function() {
  for (let i = 1; i < contacts.length - 1; i++) {
    let dataArr = contacts[i].split(',');
    let queryContact = `INSERT INTO contacts (contactName, phone_number, address, email)
    VALUES ("${dataArr[0]}","${dataArr[1]}","${dataArr[2]}","${dataArr[3]}")`
    db.run(queryContact, function (err) {
      if (err) throw err;
      console.log('contacts successfully inserted');
    });
  }
  for (let i = 1; i < groups.length - 1; i++) {
    let dataArr = groups[i].split(',');
    let queryGroups = `INSERT INTO groups (groupName)
    VALUES ("${dataArr[0]}")`
    db.run(queryGroups, function (err) {
      if (err) throw err;
      console.log('groups successfully inserted');
    });
  }
  for (let i = 1; i < contactGroup.length - 1; i++) {
    let dataArr = contactGroup[i].split(',');
    let queryContactGroup = `INSERT INTO contact_groups (ContactId,GroupId)
    VALUES ("${dataArr[0]}","${dataArr[1]}")`
    db.run(queryContactGroup, function (err) {
      if (err) throw err;
      console.log('contact group successfully inserted');
    });
  }
})
