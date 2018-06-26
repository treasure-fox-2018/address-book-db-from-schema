const Controller = require('./Controller/controller')
var argv = process.argv

if(argv[2] === 'addGroup'){
    Controller.addGroup(argv[3])
}else if(argv[2] === 'updateGroup'){
    Controller.updateGroup(argv[3],argv[4])
}else if(argv[2] === 'deleteGroup'){
    Controller.deleteGroup(argv[3])
}else if(argv[2] === 'readGroup'){
    Controller.readGroup()
}else if(argv[2] === 'addContact'){
    Controller.addContact(argv[3],argv[4],argv[5],argv[6])
}else if(argv[2] === 'readContact'){
    Controller.readContact()
}else if(argv[2] === 'updateContact'){
    Controller.updateContact(argv[3],argv[4],argv[5],argv[6])
}else if(argv[2] === 'deleteContact'){
    Controller.deleteContact(argv[3])
}
// else if(argv[2] === 'showContact'){
//     Controller.showContact()
// }

