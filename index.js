let Controller = require('./Controllers/controllerContact.js')
let ControllerGroup = require('./Controllers/controllerGroup.js')
let Control = new Controller()

let argv = process.argv


if (argv[2] == 'contact') {

  if (argv[3] == 'add') {
    Control.save(argv[4], argv[5], argv[6], argv[7])
  } else if (argv[3] == 'update') {
    //node index.js contact update id param value
    Control.update(argv[4], argv[5], argv[6])
  } else if (argv[3] == 'delete') {
    Control.delete(argv[4])
  } else if (argv[3] == 'view') {
    Control.ShowContact()
  }
} else if (argv[2] == 'group') {

  if (argv[3] == 'add') {
    ControllerGroup.save(argv[4])
  } else if (argv[3] == 'update') {
    ControllerGroup.update(argv[4], argv[5], argv[6])
  } else if (argv[3] == 'delete') {
    ControllerGroup.delete(argv[4])
  } else if (argv[3] == 'view') {
    ControllerGroup.ShowGroup()
  }



}
