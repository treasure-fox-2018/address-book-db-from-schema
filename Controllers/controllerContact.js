const Model = require('../Models/modelContact')
const View = require('../Views/viewContact')

class Contact{
    static create(name, company, phone, email){
        Model.create(name, company, phone, email, function(inputContact){
            if(inputContact[0] === true){
                View.create(inputContact[1])
            } else if(inputContact[0] === false){
                View.error(inputContact[1])
            }  else if(inputContact!== false && inputContact !== true){
                View.error(inputContact)
            } 
        })
    }

    static update(id, coloumn, newUpdate){
        Model.update(id, coloumn, newUpdate, function(contactUpdate){
            if(contactUpdate[0] === true){
                View.create(contactUpdate[1])
            } else{
                View.error(contactUpdate[1])
            }  
        })
    }

    static delete(id){
        Model.delete(id, function(deleteId){
            if(deleteId[0] === true){
                View.delete(deleteId[1])
            } else{
                View.error(deleteId[1])
            } 
        })
    }

    static show(id){
        Model.show(id, function(showContact){
            if(showContact[0] === true){
                View.show(showContact[1])
            } else if(showContact[0] === false){
                View.error(showContact[1])
            } else if(showContact !== true && showContact !== false){
                View.error(`ID ${showContact} not found!`)
            }
        })

    }
}

module.exports = Contact