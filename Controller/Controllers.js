const Model = require('../Model/Model')
const ModelContact = Model.contact
const ModelGroup = Model.group
const ModelContactGroup = Model.contacts_groups
const Views = require('../View/Views')

class Controller {
  static viewMenu(){
    Views.viewDisplay(`
    $ node main.js addContact "<name>" "<phone_number>" <e-mail> "<company>"
    $ node main.js showContacts
    $ node main.js showContacts "<name>"
    $ node main.js editContactName "<name>" "<modify_name>"
    $ node main.js deleteContact "<name>"
    $ node main.js addGroup "<name_group>"
    $ node main.js showGroups
    $ node main.js showGroups "<name_groups>"
    $ node main.js editGroupName "<name_group>" "<modify_group_name>"
    $ node main.js deleteGroup "<name_group>"
    $ node main.js addContactToGroup "<name_contact>" "<name_group>"
    $ node main.js showContactsInGroup
    $ node main.js editContactInGroup "<name_contact>" "<modify_name_contact>"
    $ node main.js deleteContactInGroup "<name_contact>"
    `)
  }
  static addContact(name, phoneNumber, eMail, nameCompany) {
    ModelContact.addContact(name, phoneNumber, eMail,nameCompany, (dataRow) => {
      Views.viewDisplay(`name: ${dataRow.name}, phone_number: ${dataRow.phoneNumber}, e-mail: ${eMail}, companyName:${nameCompany} has been successfully added to contacts`)
    })
  }

  static showContacts(name=undefined) {
    ModelContact.showContacts(name, (contacts) => {
      Views.viewDisplay(contacts)
    })
  }

  static editContactName(name, editName) {
    ModelContact.editContactName(name, editName)
    Views.viewDisplay(`name: ${name} has been changed to name: ${editName}`)
  }

  static deleteContact(name) {
    ModelContact.deleteContact(name)
    Views.viewDisplay(`name: ${name} has been deleted from Contacts`)
  }

  static addGroup(nameGroup) {
    ModelGroup.addGroup(nameGroup, (groupName) => {
      Views.viewDisplay(`group: ${groupName} has been successfully added to Groups`)
    })
  }

  static showGroups(nameGroup=undefined) {
    ModelGroup.showGroups(nameGroup, (dataGroup) => {
      Views.viewDisplay(dataGroup)
    })
  }

  static editGroupName(nameGroup, editNameGroup) {
    ModelGroup.editGroupName(nameGroup, editNameGroup)
    Views.viewDisplay(`GroupName: ${nameGroup} has been changed to GroupName: ${editNameGroup}`)
  }

  static deleteGroup(nameGroup) {
    ModelGroup.deleteGroup(nameGroup)
    Views.viewDisplay(`GroupName: ${nameGroup} has been deleted from Groups`)
  }

  static addContactToGroup(nameContact, nameGroup) {
    ModelContactGroup.addContactToGroup(nameContact, nameGroup, () => {
      Views.viewDisplay(`Successfully to added contact_name: ${nameContact} to Group ${nameGroup}`)
    })
  }

  static showContactsInGroup() {
    ModelContactGroup.showContactsInGroups((data) => {
      for (let i = 0; i < data.length; i++) {
        Views.viewDisplay(`Contact: ${data[i].contactName}, GroupName: ${data[i].groupName}`)
      }
    })
  }

  static editContactInGroup(nameContact, modifyContact) {
    ModelContactGroup.editContactInGroup(nameContact, modifyContact)
    Views.viewDisplay(`Successfully to update data in Contacts_Groups table`)
  }

  static deleteContactInGroup(nameContact) {
    ModelContactGroup.deleteContactInGroup(nameContact, (msg) => {
      if (true) {
        Views.viewDisplay('SuccessFully deleted contact and contact from Group')
      }
    }) 
  }
}

module.exports = Controller