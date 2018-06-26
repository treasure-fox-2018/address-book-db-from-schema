'use strict'

const Controller = require('./controller.js');

let argv = process.argv;
let command = argv[2];
let input = argv.slice(3);

if (!command) {
  Controller.displayHelp()
}else if (command === 'help') {
  Controller.displayCommandList()
}else if (command === 'addContact') {
  Controller.addContact(input)
}else if (command === 'updateContact') {
  Controller.updateContact(input)
}else if (command === 'deleteContact') {
  Controller.deleteContact(input)
}else if (command === 'showContact') {
  Controller.showContact(input)
}else if (command === 'addGroup') {
  Controller.addGroup(input)
}else if (command === 'updateGroup') {
  Controller.updateGroup(input)
}else if (command === 'deleteGroup') {
  Controller.deleteGroup(input)
}else if (command === 'showGroup') {
  Controller.showGroup(input)
}else if (command === 'addContactGroup') {
  Controller.addContactGroup(input)
}else if (command === 'updateContactGroup') {
  Controller.updateContactGroup(input)
}
