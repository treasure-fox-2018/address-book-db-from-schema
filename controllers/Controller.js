const Contact = require('../models/Contact.js')
const Group = require('../models/Group.js')
const ContactGroup = require('../models/ContactGroup.js')
const View = require('../views/View.js')

class Controller {
  static addContact(command, args) {
    let input = {
      name: args[0],
      phone: args[1],
      company: args[2],
      email: args[3]
    }
    Contact.create(input, function(contactId) {
      View.displayMessage(command, {contactId})
    })
  }

  static updateContact(command, args) {
    console.log(args)
    let query = { id: args[0], column: args[1], value: args[2] }
    let search = { column: 'id', value: query.id }

    Contact.findOne(search, function(contact) {
      console.log(contact)
      if (contact !== undefined) {
        Contact.update(query, function(updatedContact) {
          View.displayMessage(command, {
            id: updatedContact.id, 
            column: query.column, 
            value: updatedContact[query.column]
          })
        })
      } else {
        View.displayMessage(command, null)
      }
    })
  }

  static showContact(command) {
    Contact.read(function(contacts) {
      let output = []
      let count = 0

      for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i]
        if (i === 0) {
          output.push(contact)
        } else {
          if (contact.id === output[count].id) {
            output[count].groupName += `, ${contact.groupName}`
          } else {
            output.push(contact)
            count++
          }
        }
      }
      // console.log(output)
      View.displayMessage(command, output)
    })
  }

  static deleteContact(command, id) {

  }

  static addGroup(command, args) {
    let input = { name: args[0] }
    Group.create(input, function(groupId) {
      View.displayMessage(command, {groupId})
    })
  }

  static updateGroup(command, args) {
    let query = { id: args[0], name: args[1] }
    Group.update(query, function(group) {
      View.displayMessage(command, {
        id: group.id,
        name: group.name
      })
    })
  }

  static showGroup(command) {
    Group.read(function(groups) {
      View.displayMessage(command, groups)
    })
  }

  static deleteGroup(command, args) {

  }

  static assignContact(command, args) {
    // node main assignContact contact_id group_id
    let input = { contactId: args[0], groupId: args[1] }
    let contactQuery = { column: 'id', value: input.contactId }
    let groupQuery = { column: 'id', value: input.groupId }
    Contact.findOne(contactQuery, function(contact) {
      if (contact === undefined) {
        View.displayMessage(command, {column: "contacts", value: null, id: input.contactId})
      } else {
        Group.findOne(groupQuery, function(group) {
          if (group === undefined) {
            View.displayMessage(command, {column: "groups", value: null, id: input.groupId})
          }
          else {
            let assignQuery = { contactId: contact.id, groupId: group.id }
            ContactGroup.assign(assignQuery, function(result) {
              View.displayMessage(command, {
                column: "contactsgroups",
                value: 1,
                contact: result.contact,
                groupName: result.groupName
              })
            })
          }
        })
      }
    })
  }
}

module.exports = Controller