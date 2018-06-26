class View {
  static displayError (err, output) {
    console.log(err , output);
  }

  static displayMessage (output) {
    console.log(output);
  }

  static showDatabaseContacts (output) {
    console.log(`Contacts : `, output)
  }

  static showDatabaseGroups (output) {
    console.log(`Groups : `, output)
  }

  static displayCreateContact (output) {
    console.log(`Data Contact successfully created with Id ${output}`);
  }

  static displayCreateGroup (output) {
    console.log(`Data Group successfully created with Id ${output}`);
  }

  static displayCreateContactGroup (output) {
    console.log(`Data Contact_Group successfully created with Id ${output}`);
  }
}

module.exports = View