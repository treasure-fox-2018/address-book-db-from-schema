const ContactController = require('./controller/contactController.js')
const GroupController = require('./controller/groupController.js')
const argv = process.argv
const command = argv[2]
const table = argv[3]
const content = argv.slice(4)

if(command == 'insert') {
    if(table == 'contact') {
        // node index.js insert contact [name company phone email]
        ContactController.insertContact(content)
    } else if(table == 'group') {
        // node index.js insert group [name]
        GroupController.insertGroup(argv[4])
    }

} else if(command == 'update') {
    if(table == 'contact') {
        // node index.js update contact [id name company phone email]
        ContactController.updateContact(content)
    } else if(table == 'group'){
        // node index.js update group [id name]
        GroupController.updateGroup(content)
    }

} else if(command == 'delete') {
    console.log(content)
} else {
    console.log('Invalid input')
}