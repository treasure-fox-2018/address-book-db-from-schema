const Model = require('../Models/modelAssignContactToGroup')
const View = require('../Views/viewAssignContactToGroup')

class AssignContactToGroup{
    static assign(phoneNumber, groupName){
        Model.assign(phoneNumber, groupName, function(newContactToGroup){
            if(newContactToGroup[0] === false){
                View.error(newContactToGroup[1])
            } else if(newContactToGroup[0] === true){
                View.assign(newContactToGroup[1])
            } else if(typeof newContactToGroup[0] === Number){
                View.assign(newContactToGroup[1])
            }
            else if(newContactToGroup[0] !== false && newContactToGroup[0] !== true){
                View.error(newContactToGroup[1])
            } 
        })
    }
}

module.exports = AssignContactToGroup