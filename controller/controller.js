const ContactGroup = require('../model/contact-group')
const Contact = require('../model/contact')
const Group = require('../model/group')
const View = require('../view/view')
const Setup = require('../model/setup')


class Controller {
  static setupDB() {
    Setup.create((result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static showHelp(){
    const output = `node main.js help\nnode main.js setup\nnode main.js contact import contact.csv\nnode main.js group import group.csv\nnode main.js contact-group import contact-group.csv\nnode main.js contact create <name> <company> <phone> <email>\nnode main.js contact update <id> <name> <company> <phone> <email>\nnode main.js contact delete id\nnode main.js contact show\nnode main.js contact assign <contacId> <groupId>\nnode main.js group create <name>\nnode main.js group update <id> <name>\nnode main.js group delete id\nnode main.js group show`

    View.printMessage(output)
  }

  static importContacts(fileName) {
    Contact.importContacts(fileName, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static importGroups(fileName) {
    Group.importGroups(fileName, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static importGroups(fileName) {
    Group.importGroups(fileName, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static importContactsGroups(fileName) {
    ContactGroup.importContactsGroups(fileName, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static createContact(name, company, phone, email) {
    Contact.create(name, company, phone, email, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static createGroup(name) {
    Group.create(name, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static deleteContact(id) {
    //first delete in conjunction table, then delete in contact table
    ContactGroup.deleteByContact(id, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else {
        Contact.delete(id, (result,value) => {
          if (result == `error`) {
            View.printError(value)
          } else View.printMessage(value)
        })
      }  
    })
  }

  static deleteGroup(id) {
    //first delete in conjunction table, then delete in group table
    ContactGroup.deleteByGroup(id, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else {
        Group.delete(id, (result,value) => {
          if (result == `error`) {
            View.printError(value)
          } else View.printMessage(value)
        })
      }  
    })
  }

  static updateContact(id,name, company, phone, email) {
    Contact.update(id, name, company, phone, email, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static updateGroup (id,name) {
    Group.update(id, name, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static showContacts () {
    Contact.show((result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printTable(value)
    })
  }

  static showGroups () {
    Group.show((result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printTable(value)
    })
  }

  static assignContactGroup (contactId, groupId) {
    ContactGroup.create(contactId,groupId, (result,value) => {
      if (result == `error`) {
        View.printError(value)
      } else View.printMessage(value)
    })
  }

  static wrongCommand () {
    View.printMessage("Command not found")
  }
}

module.exports = Controller