const Contacts = require('./model.js')
const Group = require('./model_group')
const View  = require('./view.js')

class Controller {
    static contactsCSV(){
        let data = Contacts.convertCSV()
        View.showCSV(data)
    }
    static create(name,perusahaan,nomer_telepon,email){
        Contacts.createContact(name,perusahaan,nomer_telepon,email,function(err,data){
            if (err) throw err
            View.showContact(data);
        })
    }

    static update(id,name,perusahaan,nomer_telepon,email){
        Contacts.updateContact(id,name,perusahaan,nomer_telepon,email,function(err,data){
            if (err) throw err
            View.showContact(data)
        })
    }

    static delete(id){
        Contacts.deleteContact(id,function(err,data){
            if (err) throw err
            View.showContact(data);
        })
    }

    static createGroup(group_name){
        Group.createGroup(group_name,function(err,data){
            if (err) throw err
            View.showGroup(data);
        })
    }

    static updateGroup(id,group_name){
        Group.updateGroup(id,group_name,function(err,data){
            if (err) throw err
            View.showGroup(data)
        })
    }

    static deleteGroup(id){
        Group.deleteGroup(id,function(err,data){
            if (err) throw err
            View.showGroup(data);
        })
    }
}

module.exports = Controller