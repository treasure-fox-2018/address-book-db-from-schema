const Contacts = require('../models/contact');
const ContactsGroup = require('../models/contact-group');
const Groups = require('../models/group');
const Views = require('../views/view');

class Controller {
  static createDataContact (parameter) {
    Contacts.createData(parameter, function(err, output){
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        View.displayMessage(output);
      }
    })
  }

  static createDataGroup (parameter) {
    Groups.createData(parameter, function(err, output){
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        View.displayMessage(output);
      }
    })
  }

  static createDataContactGroup (parameter) {
    ContactsGroup.createData(parameter, function(err, output){
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        View.displayMessage(output);
      }
    })
  }

  static showDatabaseContacts() {
    Contacts.showDatabase(function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        View.showDatabaseContacts(output)
      }
    });
  }

  static showDatabaseGroups() {
    Groups.showDatabase(function(err, output) {
      if(err === "Error Message :") {
        Views.displayError(err, output)
      }
      else {
        View.showDatabaseGroups(output)
      }
    });
  }

  static updateDataContact() {

  }

  static updateDataGroup() {

  }

  static updateDataContactGroup() {

  }

  static deleteDataContact () {

  }

  static deleteDataGroup () {

  }

  static deleteDataContactGroup () {

  }

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

  static csvToDatabaseGroupContact () {
    ContactsGroup.csvToDatabase (function (err, output) {
      if (err === "Error Message : ") {
        Views.displayError(err, output);
      }
      else {
        Views.displayMessage(output);
      }
    }) 
  }
}


module.exports = Controller;