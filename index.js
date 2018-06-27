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

} else if(command == 'show') {
    if(table == 'contact') {
        // node index.js show contact
        ContactController.showContact()
    } else if(table == 'group') {
        // node index.js show group
        GroupController.showGroup()
    }

} else if(command == 'delete') {
    if(table == 'contact') {
        // node index.js delete contact [id]
        ContactController.deleteContact(content[0])
    } else if(table == 'group') {
        // node index.js delete group [id]
        GroupController.deleteGroup(content[0])
    }
    
} else {
    console.log('Invalid input')
}