'use strict'

const Contact = require('./Models/contact.js')
const Group = require('./Models/group.js')
const ContactGroup = require('./Models/contact-group.js')

const Controller = require('./Controllers/Controller.js')

const argv = process.argv


// Test case to seed jsons file to db
//
// let command = argv[2]
//
// if (command === "initfiletodb:groups") {
//     Controller.assignGroupstoDB()
// } else if (command === "initfiletodb:contacts") {
//     Controller.assignContactstoDB()
// }

var contact = new Contact("Haddawi", "618564701347", "2dawimuhammadhaddawi@hacktiv8.com", "hacktiv8")

Contact.save(contact)
