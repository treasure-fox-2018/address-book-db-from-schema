const Controller = require('./controller.js');

let argv = process.argv;
let command = argv[2];


if (command == 'transferContacts') {
    Controller.transferContacts()

} else if (command == 'createContact') {
    let name = argv[3];
    let company_name = argv[4];
    let phone_number = argv[5];
    let email = argv[6];
    Controller.createContact(name, company_name, phone_number, email)

} else if (command == 'transferGroups') {
    Controller.transferGroups()

} else if (command == 'createGroup') {
    let name = argv[3];
    Controller.createGroup(name)

} else if (command == 'transferContactGroup') {
    Controller.transferContactGroup()

} else if (command == 'updateContact') {
    let id = argv[3];
    let name = argv[4];
    let company_name = argv[5];
    let phone_number = argv[6];
    let email = argv[7];
    Controller.updateContact(id, name, company_name, phone_number, email)

} else if (command == 'updateGroup') {
    let id = argv[3];
    let name = argv[4];
    Controller.updateGroup(id, name)

} else if (command == 'deleteContact') {
    let id = argv[3];
    let name = argv[4];
    Controller.deleteContact(id, name)  

} else if (command == 'showContact') {
    let id = argv[3];
    Controller.showContact(id)

} else if (command == 'deleteGroup') {
    let id = argv[3];
    let name = argv[4];
    Controller.deleteGroup(id, name)

} else if (command == 'showGroup') {
    let name = argv[3];
    Controller.showGroup(name)

} else if (command == 'assignContact') {
    let ContactName = argv[3];
    let GroupName = argv[4];
    Controller.assignContact(ContactName, GroupName)
}