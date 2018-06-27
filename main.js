const Controller = require('./controller.js')

let argv    = process.argv
let command = argv[2]

if (command == 'addContact') {
    let name          = argv[3]
    let perusahaan    = argv[4]
    let nomer_telepon = argv[5]
    let email         = argv[6]

    Controller.create(name,perusahaan,nomer_telepon,email)
}else if (command == 'updateContact'){
    let id            = argv[3]
    let name          = argv[4]
    let perusahaan    = argv[5]
    let nomer_telepon = argv[6]
    let email         = argv[7]

    Controller.update(id,name,perusahaan,nomer_telepon,email)
}else if (command == 'deleteContact') {
    let id = argv[3]

    Controller.delete(id)
}else if (command == 'addGroup') {
    let group_name = argv[3]
    Controller.createGroup(group_name)
}else if (command == 'updateGroup') {
    let id = argv[3]
    let group_name = argv[4]
    Controller.updateGroup(id,group_name)
}else if (command == 'deleteGroup') {
    let id = argv[3]
    Controller.deleteGroup(id)
}else if (command == 'addCSV'){
    Controller.contactsCSV()
}
