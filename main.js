let argv = process.argv
let Controller = require('./controller')

let table = argv[2]
let menu = argv[3]
let data = argv.slice(4)

if(table === 'Contacts'){
 if(menu === 'list'){
     Controller.contactlist()
 } else if(menu === 'add'){
     Controller.addContact(data)
 } else if(menu === 'update'){
     Controller.updateContact(data)
 } else if(menu === 'delete'){
     Controller.deleteContacts(data[0])
 }
} else if(table === 'Groups'){
    if(menu === 'list'){
        Controller.grouplist()
    } else if(menu === 'add'){
        Controller.addGroup(data[0])
    } else if(menu === 'update'){
        Controller.updateGroup(data)
    } else if(menu === 'delete'){
        Controller.deleteGroup(data[0])
    } else if(menu === 'assign'){
        Controller.assignContact()
    }
} 
