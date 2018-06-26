class View {
  static displayMessage(command, data) {
    switch(command) {
      case 'addContact':
        console.log(`Contact has been added with ID: ${data.contactId}`)
        break;
      case 'updateContact':
        if (data === null) {
          console.log(`Contact is not found`)
        } else {
          console.log(`Contact with ID: ${data.id} has been updated. Updated data: ${data.column} = ${data.value}`);
        }
        break;
      case 'showContact':
        for (let i = 0; i < data.length; i++) {
          let contact = data[i]
          console.log(`ID: ${contact.id}`)
          console.log(`Name: ${contact.name}`)
          console.log(`Phone: ${contact.phone}`)
          console.log(`Company: ${contact.company}`)
          console.log(`Email: ${contact.email}`)
          console.log(`Groups: ${contact.groupName}`)
          console.log(``)
        }
        break;
      default:
    }
  }
}

module.exports = View