const view = require('./view');
const contactGroup = require('./model/contact-group');
const contact = require('./model/contact');
const group = require('./model/group');

class Controller {
  static createContact(name, company, phone, email) {
    contact.create(name, company, phone, email, function (err) {
      if (err) throw err;
      view.showMessage("Successfully created data");
    });
  }

  static updateContact(id, columnName, value) {
    contact.update(id, columnName, value, function (err) {
      if (err) throw err;
      view.showMessage("Successfully updated data");
    });
  }

  static deleteContact(id) {
    contact.delete(id, function (err) {
      if (err) throw err;
      view.showMessage("Successfully deleted data");
    });
  }

  static showContacts() {
    contact.show(function (data) {
      view.showMessage(data);
    });
  }

  static createGroup(name) {
    group.create(name, function (err) {
      if (err) throw err;
      view.showMessage("Successfully created data");
    });
  }

  static updateGroup(id, columnName, value) {
    group.update(id, columnName, value, function (err) {
      if (err) throw err;
      view.showMessage("Successfully updated data");
    });
  }

  static deleteGroup(id) {
    group.delete(id, function (err) {
      if (err) throw err;
      view.showMessage("Successfully deleted data");
    });
  }

  static showGroups() {
    group.show(function (data) {
      view.showMessage(data);
    });
  }

  static createContactGroup(contactId, groupId) {
    contactGroup.create(contactId, groupId, function (err) {
      if (err) throw err;
      view.showMessage("Successfully created data");
    });
  }

  static updateContactGroup(id, columnName, value) {
    contactGroup.update(id, columnName, value, function (err) {
      if (err) throw err;
      view.showMessage("Successfully updated data");
    });
  }

  static deleteContactGroup(id) {
    contactGroup.delete(id, function (err) {
      if (err) throw err;
      view.showMessage("Successfully deleted data");
    });
  }
}

module.exports = Controller;
