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

    
}

module.exports = Group