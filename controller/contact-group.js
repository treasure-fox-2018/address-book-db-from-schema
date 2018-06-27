const ModelContactGroup = require("../model/contact-group")
const View = require("../view/view")

class ControllerContactGroup {
  static assign (contact_id, group_id) {
    ModelContactGroup.insert(contact_id, group_id, (message) => {
      View.messageInfo(message)
    })
  }

  static update (id, contact_id, group_id) {
    ModelContactGroup.update(id, contact_id, group_id, (message) => {
      View.messageInfo(message)
    })
  }
}

module.exports = ControllerContactGroup