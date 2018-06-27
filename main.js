const Controller = require('./controller.js');

const command = process.argv[2];
const allInput = process.argv.slice(3);

if (command == 'help'){
  Controller.help();
} else if (command == 'addContact'){
  Controller.addContact(allInput);
} else if (command == 'updateContact'){
  Controller.updateContact(allInput);
} else if (command == 'deleteContact'){
  Controller.deleteContact(allInput);
} else if (command == 'showContact'){
  Controller.showContact(allInput);
} else if (command == 'addGroup'){
  Controller.addGroup(allInput);
} else if (command == 'updateGroup'){
  Controller.updateGroup(allInput);
} else if (command == 'deleteGroup'){
  Controller.deleteGroup(allInput);
} else if (command == 'addContactGroup'){
  Controller.addContactGroup(allInput);
} else if (command == 'updateContactGroup'){
  Controller.updateContactGroup(allInput);
} else {
  Controller.help();
}
