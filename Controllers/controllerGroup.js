const Model = require('../Models/modelGroup')
const View = require('../Views/viewGroup')

class Group{
    static create(name){
        Model.create(name, function(groupName){
            if(groupName[0] === true){
                View.create(groupName[1])
            } else{
                View.error(groupName[1])
            }
        })
    }

    static update(id, coloumn, newUpdate){
        Model.update(id, coloumn, newUpdate, function(updateGroup){
            if(updateGroup[0] === true){
                View.update(updateGroup[1])
            } else{
                View.error(updateGroup[1])
            }
        })
    }

    static delete(id){
        Model.delete(id, function(deleteGroup){
            if(deleteGroup[0] === true){
                View.delete(deleteGroup[1])
            } else{
                View.error(deleteGroup[1])
            }
        })
    }

    static show(id){
        Model.show(id, function(groups){
            View.show(groups)
        })
    }
}

module.exports = Group