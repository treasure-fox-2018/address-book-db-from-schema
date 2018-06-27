class View {
  static displayError (err, output) {
    console.log(err , output);
  }

  static displayMessage (output) {
    console.log(output);
  }

  //------------------------------------------------------------

  static showDatabaseContacts (output) {
    console.log(`Contacts : `, output)
  }

  static updateDataContact (output) {
    console.log(`${output} data Contact telah berhasil di-update`);
  }

  static deleteDataContact (output) {
    console.log(`${output} data Contact telah berhasil di-delete`);
  }

  //-----------------------------------------------------------
  
  static showDatabaseGroups (output) {
    console.log(`Groups : `, output)
  }

  static updateDataGroups  (output) {
    console.log(`${output} data Groups telah berhasil di-update`);
  }
  
  static deleteDataContact (output) {
    console.log(`${output} data Group telah berhasil di-delete`);
  }

  //------------------------------------------------------------

  static updateDataContactGroup (output) {
    console.log(`${output} data Contact Group telah berhasil di-update`);
  }

  static deleteDataContactGroup (output) {
    console.log(`${output} data Contact Group telah berhasil di-delete`);
  }
  
}

module.exports = View