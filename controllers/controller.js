const Contacts = require('../models/contact');
const ContactsGroup = require('../models/contact-group');
const Groups = require('../models/group');
const Views = require('../views/view');

class Controller {
  static csvToDatabaseContacts () {
    Contacts.csvToDatabase (function (err, output) {
      if (err === "Error Message : ") {
        Views.displayError(err, output);
      }
      else {
        Views.displayMessage(output);
      }
    }) 
  }

  static createDataContact (parameter) {
    Contacts.createData(parameter, function(err, output){
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.displayMessage(output);
      }
    })
  }

  static showDatabaseContacts() {
    Contacts.showDatabase(function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.showDatabaseContacts(output)
      }
    });
  }

  static updateDataContact (parameter) {
    Contacts.updateDataContact (parameter, function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.updateDataContact(output)
      }
    });
  }

  static deleteDataContact (parameter) {
    Contacts.deleteDataContact (parameter, function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.deleteDataContact(output);
      }
    });
  }

  //------------------------------------------------------------


  static csvToDatabaseGroup () {
    Groups.csvToDatabase (function (err, output) {
      if (err === "Error Message : ") {
        Views.displayError(err, output);
      }
      else {
        Views.displayMessage(output);
      }
    }) 
  }

  static createDataGroup (parameter) {
    Groups.createData(parameter, function(err, output){
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.displayMessage(output);
      }
    })
  }

  static showDatabaseGroups() {
    Groups.showDatabase(function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.showDatabaseGroups(output)
      }
    });
  }


  static updateDataGroup(parameter) {
    Groups.updateDataGroup(parameter, function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.updateDataGroups(output)
      }
    });
  }

  static deleteDataGroup () {
    Groups.deleteDataGroup (parameter, function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.deleteDataGroup(output);
      }
    });
  }

  //----------------------------------------------------------

  static csvToDatabaseContactGroup () {
    ContactsGroup.csvToDatabase (function (err, output) {
      if (err === "Error Message : ") {
        Views.displayError(err, output);
      }
      else {
        Views.displayMessage(output);
      }
    }) 
  }

  static createDataContactGroup (parameter) {
    ContactsGroup.createData(parameter, function(err, output){
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.displayMessage(output);
      }
    })
  }

  static updateDataContactGroup(parameter) {
    ContactsGroup.updateDataContactGroup(parameter, function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.updateDataContactGroup(output)
      }
    });
  }

  static deleteDataContactGroup (parameter) {
    ContactsGroup.deleteDataContactGroup (parameter, function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        Views.deleteDataContactGroup(output);
      }
    });
  }
}


module.exports = Controller;