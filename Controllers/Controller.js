'use strict'

const GroupFile = './groups.json'
const ContactFile = './contacts.json'

const Contact = require('../Models/contact.js')
const Group = require('../Models/group.js')
const ContactGroup = require('../Models/contact-group.js')

const View = require('../Views/view.js')

class Controller {
    static assignGroupstoDB() {
        Group.readGroupsJSONFile(GroupFile, function(groups) {
            for (let i = 0; i < groups.length; i++) {
                let groupName = groups[i].name
                let group = new Group(groupName)

                Group.writeGroupToGroups(group)
            }

        })
    }

    static assignContactstoDB() {
        Contact.readContactsJSONFile(ContactFile, function(contacts) {
          for (let i = 0; i < contacts.length; i++) {
              let contactName = contacts[i].name
              let contactPhone = contacts[i].phone_number
              let contactEmail = contacts[i].email
              let contactCompany = contacts[i].company_name

              let contact = new Contact(contactName, contactPhone, contactEmail, contactCompany)

              Contact.save(contact)
          }
        })
    }
}

module.exports = Controller
