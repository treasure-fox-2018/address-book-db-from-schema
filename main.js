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

} else if (command == 'createGroups') {
    let name = argv[3];
    Controller.createGroups(name)
}