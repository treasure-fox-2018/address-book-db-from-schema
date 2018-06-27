const argv = process.argv
const command = argv[2]
const input = argv.slice(3)
const Controllers = require('./Controller/Controllers')
const fs = require('fs')

if (command === 'addContact') {
  Controllers.addContact(input[0], input[1], input[2], input[3])
} else if (command === 'showContacts') {
  Controllers.showContacts(input[0])
} else if (command === 'editContactName') {
  Controllers.editContactName(input[0], input[1])
} else if (command === 'deleteContact') {
  Controllers.deleteContact(input[0])
} else if (command === 'addGroup') {
  Controllers.addGroup(input[0])
} else if (command === 'showGroups') {
  Controllers.showGroups(input[0])
} else if (command === 'editGroupName') {
  Controllers.editGroupName(input[0], input[1])
} else if (command === 'deleteGroup') {
  Controllers.deleteGroup(input[0])
} else if (command === 'help') {
  Controllers.viewMenu()
} else if (command === 'addContactToGroup') {
  Controllers.addContactToGroup(input[0], input[1])
} else if (command === 'showContactsInGroup') {
  Controllers.showContactsInGroup()
} else if (command === 'editContactInGroup') {
  Controllers.editContactInGroup(input[0], input[1])
} else if (command === 'deleteContactInGroup') {
  Controllers.deleteContactInGroup(input[0])
}