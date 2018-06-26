'use strict'

const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  static displayHelp(){
    View.displayMessage('$ node index.js help')
  }
  static displayCommandList(){
    let commands = ['$ node index.js',
                    '$ node index.js help',
                    '$ node index.js addContact <name> <phone_number> <address> <email>',
                    '$ node index.js updateContact <id> <name> <phone_number> <address> <email>',
                    '$ node index.js addGroup <name>',
                    '$ node index.js updateGroup <id> <name>',
                    '$ node index.js addContactGroup <contactId> <groupId>',
                    '$ node index.js updateContactGroup <id> <contactId> <groupId>',]
    for (var i = 0; i < commands.length; i++) {
      View.displayMessage(commands[i])
    }
  }
  static addContact(input){
    Model.addContact(input, function(newContact, totalContact){
      View.displayMessage(`save contact success ${newContact}. Total contacts: ${totalContact}`)
    })
  }
  static updateContact(input){
    Model.updateContact(input, function(contactUpdate, contactId){
      View.displayMessage(`update contact success ${contactUpdate}. on contact ID: ${contactId}`)
    })
  }
  static deleteContact(input){
    Model.deleteContact(input, function(totalContact){
      View.displayMessage(`delete contact success. Total contacts: ${totalContact}`)
    })
  }
  static showContact(input){
    Model.showContact(input, function(contacts){
      View.displayMessage(`contacts: ${contacts}`)
    })
  }
  static addGroup(input){
    Model.addGroup(input, function(newGroup, totalGroup){
      View.displayMessage(`save group success ${newGroup}. Total groups: ${totalGroup}`)
    })
  }
  static updateGroup(input){
    Model.updateGroup(input, function(groupUpdate, groupId){
      View.displayMessage(`update group success ${groupUpdate}. on group ID: ${groupId}`)
    })
  }
  static deleteGroup(input){
    Model.deleteGroup(input, function(totalGroup){
      View.displayMessage(`delete group success. Total groups: ${totalGroup}`)
    })
  }
  static addContactGroup(input){
    Model.addContactGroup(input, function(newContactGroup, totalContactGroup){
      View.displayMessage(`save contact group success ${newContactGroup}. Total contact groups: ${totalContactGroup}`)
    })
  }
  static updateContactGroup(input){
    Model.updateContactGroup(input, function(contactGroupUpdate, contactGroupId){
      View.displayMessage(`update contact group success ${contactGroupUpdate}. on contact group ID: ${contactGroupId}`)
    })
  }
}

module.exports = Controller;
