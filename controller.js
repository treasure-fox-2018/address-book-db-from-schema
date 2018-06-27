const Model = require ('./model')
const View = require ('./view')

class Controller {
  
  static help(){
    let commandList = [
    'help',
    'addContact <Name> <Phone_number> <Address>',
    'updateContact <id> <name> OR <phone_number> OR <address>',
    'deleteContact <id>',
    'showContact <id>',
    'addGroup <name>',
    'updateGroup <id> <name>',
    'deleteGroup <id>',
    'addContactGroup <contactId> <groupId>',
    'updateContactGroup <contactGroupid> <contactId> OR <groupId>'
    ];
    
    for (let i in commandList) {
      View.showMessage(commandList[i]);
    }
  }

  static addContact (inputArr){
    Model.addContact(inputArr, (err, result) => {
      if (err === 'no error'){
        let text = `Contact ${JSON.stringify(result[0])} saved. Total contact : ${result[1]}`;
        View.showMessage(text);
      } else {
        View.showMessage(err.message);
      }
    })
  }

  static updateContact (inputArr){
    Model.updateContact(inputArr, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message)
      }
    })
  }

  static deleteContact (inputArr){
    Model.deleteContact(inputArr, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message)
      }
    })
  }

  static showContact (inputArr){
    Model.showContact(inputArr, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message)
      }
    })
  }

  static addGroup (inputArr){
    Model.addGroup(inputArr, (err, result) => {
      if (err === 'no error'){
        let text = `Group ${JSON.stringify(result[0])} saved. Total group : ${result[1]}`;
        View.showMessage(text);
      } else {
        View.showMessage(err.message);
      }
    })
  }

  static updateGroup (inputArr){
    Model.updateGroup(inputArr, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message)
      }
    })
  }

  static deleteGroup (inputArr){
    Model.deleteGroup(inputArr, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message)
      }
    })
  }

  static addContactGroup (inputArr){
    Model.addContactGroup (inputArr, (err, result) => {
      if (err === 'no error'){
        let text = `ContactGroup ${JSON.stringify(result[0])} saved. Total ContactGroup : ${result[1]}`;
        View.showMessage(text);
      } else {
        View.showMessage(err.message);
      }
    })
  }

  static updateContactGroup (inputArr){
    Model.updateContactGroup (inputArr, (err, result) => {
      if (err === 'no error'){
        View.showMessage(result)
      } else {
        View.showMessage(err.message)
      }
    })
  }

}


module.exports = Controller;