const Model = require("../model/groupModel.js")
const View = require("../view/groupView.js")

class Controller{

    static create(name){
        Model.create(name,function(data){
            View.create(data)
        })
    }

    static update(id,column,value){
        Model.update(id,column,value,function(data){
            View.update(data)
        })
    }

    static delete(id){
        Model.delete(id,function(data){
            View.delete(data)
        })
    }

    static show(){
        Model.show(function(data){
            View.show(data)
        })
    }
}

module.exports = Controller