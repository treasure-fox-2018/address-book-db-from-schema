const Controller = require('./controllers/controller');
const argv = process.argv;
const table = argv[2];
const command = argv[3];
const parameter = argv.slice(4);

if (table === "contact") {
  if (command === "transfer") {
    Controller.csvToDatabaseContacts();
  }
  else if (command === "create") {
    Controller.createDataContact(parameter);
  }
  else if (command === "read") {
    Controller.showDatabaseContacts();
  }
  else if (command === "update") {
    Controller.updateDataContact(parameter);
  }
  else if (command === "delete") {
    Controller.deleteDataContact(parameter);
  }
}

else if (table === "group") {
  if (command === "transfer") {
    Controller.csvToDatabaseGroup();
  }
  else if (command === "create") {
    Controller.createDataGroup(parameter);  
  }
  else if (command === "read") {
    Controller.showDatabaseGroups();
  }
  else if (command === "update") {
    Controller.updateDataGroup(parameter);
  }
  else if (command === "delete") {
    Controller.deleteDataGroup(parameter)
  }
}
else if (table === "contact_group"){
  if (command === "transfer") {
    Controller.csvToDatabaseContactGroup();
  }
  else if (command === "create") {
    Controller.createDataContactGroup(parameter);
  }
  else if (command === "update") {
    Controller.updateDataContactGroup(parameter)
  }
  else if (command === "delete") {
    Controller.deleteDataContactGroup(parameter);
  }
}

// console.log(parameter)