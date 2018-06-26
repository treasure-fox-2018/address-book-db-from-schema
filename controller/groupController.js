const ModelGroup = require('../model/groupModel.js')
const View = require('../view/view.js')

class Group {
    
    static insertGroup(name) {
        ModelGroup.insertGroup(name, function(dataGroup) {
            View.insertGroup(dataGroup)
        })
    }

    static updateGroup(contentUpdate) {
        ModelGroup.updateGroup(contentUpdate, function(dataUpdate) {
            View.updateGroup(dataUpdate);
        })
    }

    static showGroup() {
        ModelGroup.showGroup(function(dataGroup) {
            View.showGroup(dataGroup)
        })
    }

    static deleteGroup(idGroup) {
        ModelGroup.deleteGroup(idGroup, function(deletedData) {
            View.deleteGroup(deletedData)
        })
    }
}

module.exports = Group