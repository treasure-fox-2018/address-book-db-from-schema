const ControllerContact = require("./controller/contactController.js")
const ControllerGroup = require("./controller/groupController.js")
let argv = process.argv

let data = argv[2]
let command = argv[3]
if(data == "contact"){
    if(command == "add"){
        ControllerContact.create(argv[4],argv[5],argv[6],argv[7])
    }else if(command == "update"){
        ControllerContact.update(argv[4],argv[5],argv[6])
    }else if(command == "delete"){
        ControllerContact.delContact(argv[3])
    }else if(command == "show"){
        ControllerContact.showData()
    }
}else if(data == "group"){
    if(command == "create"){
        ControllerGroup.create(argv[4])
    }else if(command == "update"){
        ControllerGroup.update(argv[4],argv[5],argv[6])
    }else if(command == "delete"){
        ControllerGroup.delete(argv[4])
    }else if(command == "show"){
        ControllerGroup.show()
    }
}
