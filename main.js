const argv = process.argv
const command = argv[2]
const args = argv.slice(3)
const Controller = require('./controllers/Controller.js')

switch(command) {
  case 'addContact':
    Controller.addContact(command, args);
    break;
  case 'deleteContact':
    Controller.deleteContact(command, args);
    break;
  case 'showContact':
    Controller.showContact(command); // with groups
    break;
  case 'updateContact':
    Controller.updateContact(command, args);
    break;
  case 'addGroup':
    Controller.addGroup(command, args);
    break;
  case 'updateGroup':
    Controller.updateGroup(command, args);
    break;
  case 'deleteGroup':
    Controller.deleteGroup(command, args); // delete from group table and conjunction table
    break;
  case 'showGroup':
    Controller.showGroup(command);
    break;
  case 'assignContact':
    Controller.assignContact(); 
    break;
  case 'help':
    Controller.showHelp();
    break;
  default:
    Controller.showHelp();
}
