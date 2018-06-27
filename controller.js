let Model = require('./model')
let Contact = Model[0]
let Group = Model[1]
let ContactGroup = Model[2]
let View = require('./view')

class Controller{
    static contactlist(){
        Contact.list(function(contacts, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(contacts)
            }
        })
    }

    static addContact(data){
        Contact.add(data, function(contactObj, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(`Save data success ${JSON.stringify(contactObj.contactPerson)}. Total Contact: ${contactObj.totalContact}`)
            }
        })
    }

    static updateContact(data){
        Contact.update(data, function(id, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(`Contacts with id ${id} is successfully updated `)
            }
        })
    }

    static deleteContact(id){
        Contact.delete(id, function(result, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(result)
            }
        })
    }

    static grouplist(){
        Group.list(function(groups, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(groups)
            }
        })
    }

    static addGroup(name){
        Group.add(name, function(result, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(result)
            }
        })
    }

    static updateGroup(data){
        Group.update(data, function(id, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(`Contacts with id ${id} is successfully updated `)
            }
        })
    }

    static deleteGroup(id){
        Group.delete(id, function(result, err){
            if(err){
                View.display('ERROR Message:', err.message)
            } else {
                View.display(result)
            }
        })
    }

    
}

module.exports = Controller