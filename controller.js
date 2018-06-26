const model = require('./model')
const view = require('./view')

class Contact{
    static Create(name,company,phone,email){
        model.Contact.Create(name,company,phone,email,(status)=>{
            view.Contact.Create(status)
        })
    }
    static Delete(id){
        model.Contact.Delete(id,(status)=>{
            view.Contact.Delete(status)
        })
    }
    static Update(id,colomn,value){
        model.Contact.Update(id,colomn,value,(status)=>{
            view.Contact.Update(status)
        })
    }
    static Show(){
        model.Contact.Show((contacts)=>{
            view.Contact.Show(contacts)
        })
    }
}

class Group{
    static Create(name){
        model.Group.Create(name,(status)=>{
            view.Group.Create(status)
        })
    }
    static Delete(id){
        model.Group.Delete(id,(status)=>{
            view.Group.Delete(status)
        })
    }
    static Update(id,colomn,value){
        model.Group.Update(id,colomn,value,(status)=>{
            view.Group.Update(status)
        })
    }
    static Show(){
        model.Group.Show((contacts)=>{
            view.Group.Show(contacts)
        })
    }
}

module.exports = {
    Contact,
    Group
}