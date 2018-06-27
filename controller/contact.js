const ContactModel = require("../model/contact")
const View = require("../view/view")

class ContactContreller {
  static insert (name, perusahaan, number_phone, email) {
    ContactModel.insert(name, perusahaan, number_phone, email, (message) => {
      View.messageInfo(message)
    })
  }

  static update (id, name, perusahaan, number_phone, email) {
    ContactModel.update(id, name, perusahaan, number_phone, email, (message) => {
      View.messageInfo(message)
    })
  }

  static delete (id) {
    ContactModel.delete(id, (message) => {
      View.messageInfo(message)
    })
  }

  static showContact () {
    ContactModel.showContact(message => {
      View.messageInfo(message)
    })  
  }

}

module.exports = ContactContreller