const Model = require("../model/contactModel.js")
const View = require("../view/contactView.js")

class Controller{
    static create(name,company,phone_number,email){
        Model.create(name,company,phone_number,email,function(data){
            View.create(data)
        })
    }

    static update(id,column,value){
        Model.update(id,column,value,function(data){
            View.update(data)
        })
    }

    static delContact(id){
        Model.delContact(id,function(data){
            View.delContact(data)
        })
    }

    static showData(){
        Model.showData(function(data){
            View.showData(data)
        })
    }
}
module.exports = Controller