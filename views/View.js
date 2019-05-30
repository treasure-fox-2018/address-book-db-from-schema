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
          console.log(`Contact with ID: ${data.id} has been updated. You changed the ${data.column} to ${data.value}`);
        }
        break;
      case 'deleteContact':
        console.log(`deleted`)
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
      case 'addGroup':
        console.log(`Group has been added with ID: ${data.groupId}`)
        break;
      case 'updateGroup':
        console.log(`Group with ID: ${data.id} has been updated to: ${data.name}`)
        break;
      case 'deleteGroup':
        console.log(`deleted`)
        break;
      case 'showGroup':
        for(let i = 0; i < data.length; i++) {
          let group = data[i]
          console.log(`ID: ${group.id}`)
          console.log(`Name: ${group.name}`)
          console.log(``)
        }
        break;
      case 'assignContact':
        if (data.value === null) {
          console.log(`${data.column === 'contacts' ? 'Contact' : 'Group'} with ID: ${data.id} not found.`)
        } else {
          console.log(`${data.contact} has been assigned to ${data.groupName} group`)
        }
        break;
      default:
    }
  }
}

module.exports = View