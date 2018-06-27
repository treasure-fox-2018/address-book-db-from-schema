const Contact = require ('./modelContact');
const Group = require ('./modelGroup');
const ContactGroup = require ('./modelContactGroup');
const View = require ('./view');

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
    Contact.add (inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message);
      } else {
        let text = `Contact ${JSON.stringify(result[0])} saved. Total contact : ${result[1]}`;
        View.showMessage(text);
      }
    })
  }

  static updateContact (inputArr){
    Contact.update (inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message)
      } else {
        View.showMessage(result)
      }
    })
  }

  static deleteContact (inputArr){
    Contact.delete (inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message)
      } else {
        View.showMessage(result)
      }
    })
  }

  static showContact (inputArr){
    Contact.show(inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message);
      } else {
        View.showMessage(result);
      }
    })
  }

  static addGroup (inputArr){
    Group.add(inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message);
      } else {
        let text = `Group ${JSON.stringify(result[0])} saved. Total group : ${result[1]}`;
        View.showMessage(text);
      }
    })
  }

  static updateGroup (inputArr){
    Group.update(inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message)
      } else {
        View.showMessage(result)
      }
    })
  }

  static deleteGroup (inputArr){
    Group.delete(inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message)
      } else {
        View.showMessage(result)
      }
    })
  }

  static addContactGroup (inputArr){
    ContactGroup.add (inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message);
      } else {
        let text = `ContactGroup ${JSON.stringify(result[0])} saved. Total ContactGroup : ${result[1]}`;
        View.showMessage(text);
      }
    })
  }

  static updateContactGroup (inputArr){
    ContactGroup.updateContactGroup (inputArr, (err, result) => {
      if (err){
        View.showMessage(err.message)
      } else {
        View.showMessage(result)
      }
    })
  }
}

module.exports = Controller;