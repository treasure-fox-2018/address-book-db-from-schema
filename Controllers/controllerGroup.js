let Group = require('../Models/GroupModel.js')
let Groups = new Group();
let Views = require('../Views/GroupView.js')
// let ViewContact = new Views()

class Controller {

  static save(groupname) {
    let group = new Group(groupname)
    group.save(function (data) {
      Views.add(data)
    })
  }


  static update(id, param, value) {
    Groups.update(id, param, value, function (data) {
      Views.update(data)
    })
  }

  static delete(id) {
    Groups.delete(id, function (data) {
      Views.delete(data)
    })
  }
  //

  static ShowGroup() {
    Groups.ShowGroup(function (dataGrup) {
      Views.ShowGroup(dataGrup)
    })
  }




}


module.exports = Controller
