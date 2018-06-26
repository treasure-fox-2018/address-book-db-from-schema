const GroupModel = require("../model/group")
const View = require("../view/view")

class GroupContreller {
  static insert (name_group) {
    GroupModel.insert(name_group, (message) => {
      View.messageInfo(message)
    })
  }

  static update (id, name_group) {
    GroupModel.update(id, name_group, (message) => {
      View.messageInfo(message)
    })
  }

  static delete (id) {
    GroupModel.delete(id, (message) => {
      View.messageInfo(message)
    })
  }

  static showGroup () {
    GroupModel.showGroup(message => {
      for (let i = 0; i < message.length; i++) {
        View.messageInfo(message[i].nameGroup)
      }
    })
  }
}

module.exports = GroupContreller