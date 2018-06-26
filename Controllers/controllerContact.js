let Contacts = require('../Models/contactModel.js')
let Contact = new Contacts();
let Views = require('../Views/ContactView.js')
// let ViewContact = new Views()

class Controller {

  save(name, company, phone, email) {
    let contact = new Contacts(name, company, phone, email)
    contact.save(function (data) {
      Views.add(data)
    })
  }

  update(id, param, value) {
    Contact.update(id, param, value, function (data) {
      Views.update(data)
    })
  }

  Help() {

    Views.Help()

  }

  delete(id) {
    Contact.delete(id, function (data) {
      Views.delete(data)
    })
  }


  ShowContact() {
    Contact.ShowContact(function (dataCon) {
      Views.ShowContact(dataCon)
    })
  }




}


module.exports = Controller
