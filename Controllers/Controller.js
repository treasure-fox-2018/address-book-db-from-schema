'use strict'

const GroupFile = './groups.json'
const ContactFile = './contacts.json'

const Contact = require('../Models/contact.js')
const Group = require('../Models/group.js')
const ContactGroup = require('../Models/contact-group.js')

const View = require('../Views/view.js')

const uniqueRandom = require('unique-random');


class Controller {
    static printHelp() {
        View.printHelp()
    }

    static writeGroupstoDB() {
        Group.readGroupsJSONFile(GroupFile, function(groups) {
            for (let i = 0; i < groups.length; i++) {
                let groupName = groups[i].name
                let group = new Group(groupName)

                Group.save(group, function() {
                    if (i === groups.length - 1) {
                        View.showMessage('Seed All Group Data Success')
                    }
                })
            }

        })
    }

    static writeContactstoDB() {
        Contact.readContactsJSONFile(ContactFile, function(contacts) {
          for (let i = 0; i < contacts.length; i++) {
              let contactName = contacts[i].name
              let contactPhone = contacts[i].phone_number
              let contactEmail = contacts[i].email
              let contactCompany = contacts[i].company_name

              let contact = new Contact(contactName, contactPhone, contactEmail, contactCompany)

              Contact.save(contact, function() {
                  if (i === contacts.length - 1) {
                      View.showMessage('Seed All Contact Data Success')
                  }
              })
          }
        })
    }

    static addNewContact(contactData) {
        let contactName = contactData[0]
        let contactPhone = contactData[1]
        let contactEmail = contactData[2]
        let contactCompany = contactData[3]

        let newContact = new Contact(contactName, contactPhone, contactEmail, contactCompany)

        Contact.save(newContact, function() {
            console.log(`Save new contact : ${contactName}, Success!`);
        })
    }

    static addNewGroup(groupName) {
        let newGroup = new Group(groupName)

        Group.save(newGroup, function() {
            View.showMessage(`Add new group : ${groupName}, Success!`)
        })
    }

    static updateContact(contactUpdateData) {
        let contactPreviousData = contactUpdateData[0].split(":")
        let contactNewData = contactUpdateData[1].split(":")
        let contactUpdateField = contactPreviousData[0]
        let contactInitialValue = contactPreviousData[1]
        let contactUpdateValue = contactNewData[1]

        Contact.findContactByField(contactUpdateField, contactInitialValue, function(findContactResult) {
            if (findContactResult.length !== 0) {
                Contact.update(contactUpdateField, contactInitialValue, contactUpdateValue, function() {
                    View.showMessage('Update contact record success!')
                })
            } else {
                View.showMessage('Data tidak ditemukan!')
            }
        })
    }

    static updateGroup(groupUpdateData) {
        let groupPreviousData = groupUpdateData[0].split(":")
        let groupNewData = groupUpdateData[1].split(":")
        let groupUpdateField = groupPreviousData[0]
        let groupInitialValue = groupPreviousData[1]
        let groupUpdateValue = groupNewData[1]

        Group.findGroupByField(groupUpdateField, groupInitialValue, function(findGroupResult) {
            if (findGroupResult.length !== 0) {
                Group.update(groupUpdateField, groupInitialValue, groupUpdateValue, function() {
                    View.showMessage('Update group record success')
                })
            } else {
                View.showMessage('Data tidak ditemukan')
            }
        })
    }

    static assignContactToGroup(contactGroupData) {
        let contactName = contactGroupData[0]
        let groupName = contactGroupData[2]


        // Find contact if exists
        Contact.findContactByField("name", contactName, function(findContactResult) {
            if (findContactResult !== 0) {
                let contactId = findContactResult[0].id

                // Find group if exists
                Group.findGroupByField("name", groupName, function(findGroupResult) {
                    if (findGroupResult !== 0) {
                        let groupId = findGroupResult[0].id

                        // Validating if assign parameters has duplicate
                        ContactGroup.checkDuplicate(contactId, groupId, function(duplicateResult) {
                            if (duplicateResult.length === 0 ) {

                                // Assign contact to group if exists
                                ContactGroup.assignContactToGroup(contactId, groupId, function() {
                                    View.showMessage(`Successfully assigned ${contactName} into ${groupName} Group`)
                                })
                            } else {
                                View.showMessage(`Access denied.\n${contactName} has already assigned to ${groupName} group!`)
                            }
                        })
                    }
                })

            } else {
                View.showMessage("Data tidak ditemukan")
            }
        })

    }

    static assignContactAll() {
        const randomContactId = uniqueRandom(1, 50)
        const randomGroupId = uniqueRandom(1, 7)

        for (let i = 0; i < 70; i++) {
            let contactId = randomContactId()
            let groupId = randomGroupId()

            // Validating if assign parameters has duplicate
            ContactGroup.checkDuplicate(contactId, groupId, function(duplicateResult) {
                if (duplicateResult.length === 0 ) {
                    // Assign contact to group if exists
                    ContactGroup.assignContactToGroup(contactId, groupId, function() {
                        // View.showMessage(`Successfully assigned ${contactName} into ${groupName} Group`)
                    })
                }
            })

        }
    }

    static showAllGroupContacts() {
        ContactGroup.showAllGroupContacts(function(GroupContacts) {
            View.showMessage(GroupContacts)
        })
    }

    static deleteContact(contactName) {
        Contact.findContactByField("name", contactName, function(contact) {
            if (contact.length !== 0) {
                let contactId = contact[0].id
                // console.log(contactId)
                Contact.delete(contactId, function(status) {
                    View.showMessage(`Delete contact '${contactName}' status : ${status}`)
                })
            } else {
                View.showMessage('Data tidak ditemukan!')
            }
        })
    }


    static deleteGroup(groupName) {
        Group.findGroupByField("name", groupName, function(group) {
            if (group.length !== 0) {
                let groupId = group[0].id
                Group.delete(groupId, function(status) {
                    View.showMessage(`Delete group '${groupName}' status: ${status}`)
                })
            } else {
                View.showMessage('Group tidak ditemukan')
            }
        })
    }
}

module.exports = Controller




















//////
