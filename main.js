'use strict'

const Contact = require('./Models/contact.js')
const Group = require('./Models/group.js')
const ContactGroup = require('./Models/contact-group.js')

const Controller = require('./Controllers/Controller.js')

const argv = process.argv
let command = argv[2]

if (command === "initfiletodb:groups") {
   Controller.writeGroupstoDB()
} else if (command === "initfiletodb:contacts") {
   Controller.writeContactstoDB()
} else if (command === 'add:contact') {
    let contactData = argv.slice(3)
    Controller.addNewContact(contactData)
} else if (command === 'add:group') {
    let groupName = argv.slice(3)
    Controller.addNewGroup(groupName)
} else if (command === 'update:contact') {
    let contactUpdateData = argv.slice(3)
    Controller.updateContact(contactUpdateData)
} else if (command === 'update:group') {
    let groupUpdateData = argv.slice(3)
    Controller.updateGroup(groupUpdateData)
} else if (command === 'assign:contact') {
    let contactGroupData = argv.slice(3)
    Controller.assignContactToGroup(contactGroupData)
} else if (command === 'assign:contactall') {
    Controller.assignContactAll()
}


// Test case to seed jsons file to db
//
//



// Test case to insert new contact with instantiate
// var contact = new Contact("Haddawi", "618564701347", "2dawimuhammadhaddawi@hacktiv8.com", "hacktiv8")

// Test case to insert new contact or group

// Contact.save(contact)
