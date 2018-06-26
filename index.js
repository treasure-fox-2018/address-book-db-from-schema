const ControllerContact = require('./Controllers/controllerContact')
const ControllerGroup = require('./Controllers/controllerGroup')
const ControllerAssign = require('./Controllers/controllerAssignContactToGroup')
const ControllerHelp = require('./Controllers/controllerHelp')
const argv = process.argv.slice(2)
const command = argv[0]
const input = argv[1]
const name = argv[2]
const company = argv[3]
const phone = argv[4]
const email = argv[5]
const id = argv[2]
const coloumn = argv[3]
const newUpdate = argv.slice(4)
const phoneNumber = argv[1]
const groupName = argv.slice(2)
// const help = argv[0]


if(command === "create"){
    if(input === "contact"){
        ControllerContact.create(name, company, phone, email)
    } else if(input === "group"){
        ControllerGroup.create(name)
    } 
} else if(command === "update"){
    if(input === "contact"){
        ControllerContact.update(id, coloumn, newUpdate)
    } else if(input === "group"){
        ControllerGroup.update(id, coloumn, newUpdate)
    } 
} else if(command === "delete"){
    if(input === "contact"){
        ControllerContact.delete(id)
    } else if(input === "group"){
        ControllerGroup.delete(id)
    } 
} else if(command === "show"){
    if(input === "contact"){
        ControllerContact.show(id)
    } else if(input === "group"){
        ControllerGroup.show(id)
    } 
} else if(command === "assign"){
    ControllerAssign.assign(phoneNumber, groupName)
} else if(command === "help"){
    ControllerHelp.help()
} else{
    ControllerHelp.help()
}