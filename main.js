const controller = require('./controller');
const table = process.argv[2];
const command = process.argv[3];
const args = process.argv.slice(4);

if (table === "Contacts") {
  if (command === "create") {
    let name = args[0] + " " + args[1];
    let company = args[2];
    let phone = args[3];
    let email = args[4];
    controller.createContact(name, company, phone, email)
  } else if (command === "update") {
    let id = args[0];
    let columnName = args[1];
    let value = args[2];
    controller.updateContact(id, columnName, value);
  } else if (command === "delete") {
    let id = args[0]
    controller.deleteContact(id);
  } else if (command === "show") {
    controller.showContacts();
  }
} else if (table === "Groups") {
  if (command === "create") {
    let name = args[0]
    controller.createGroup(name)
  } else if (command === "update") {
    let id = args[0];
    let columnName = args[1];
    let value = args[2];
    controller.updateGroup(id, columnName, value);
  } else if (command === "delete") {
    let id = args[0]
    controller.deleteGroup(id);
  } else if (command === "show") {
    controller.showGroups();
  }
} else if (table === "ContactsGroups") {
  if (command === "create") {
    let contactId = args[0];
    let groupId = args[1];
    controller.createContactGroup(contactId, groupId)
  } else if (command === "update") {
    let id = args[0];
    let columnName = args[1];
    let value = args[2];
    controller.updateContactGroup(id, columnName, value);
  } else if (command === "delete") {
    let id = args[0]
    controller.deleteContactGroup(id);
  }
}
