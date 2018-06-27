
const Setup = require('./setup');
const Contact = require('./contact');
const Group = require('./group');
const View = require('./view');

class Controller {
  static setup() {
    Setup.setup();
  }

  static addContact(name, address) {
    let newContact = new Contact({name, address});
    newContact.save();
  }

  static deleteContact(id) {
    let deletedContact = new Contact({id});
    deletedContact.delete();
  }

  static updateContact(id, name, address) {
    let updatedContact = new Contact({id, name, address});
    updatedContact.update();
  }

  static showContact(id) {
    let contact = new Contact({id});
    contact.show();
  }

  static addGroup(name) {
    let newGroup = new Group({name});
    newGroup.save();
  }

  static deleteGroup(id) {
    let deletedGroup = new Group({id});
    deletedGroup.delete();
  }

  static updateGroup(id, name) {
    let updatedGroup = new Group({id, name});
    updatedGroup.update();
  }

  static showGroup(id) {
    let group = new Group({id});
    group.show();
  }

  static assignContact(contactId, GroupId) {
    let contact = new Contact({id: contactId});
    contact.assign(GroupId);
  }
}

// let contact = new Contact({name: 'michael', address: 'gading'});
// console.log(`id sebelum save: ${contact.id}`);
// contact.save();
// console.log(`id setelah save:${contact.id}`);

// contact.name = 'mikael';
// contact.update();

module.exports = Controller;
