"use strict"
const Controller = require('./controller/controller.js')
const table = process.argv[2];
const command = process.argv[3];
const param = process.argv.slice(4)

if(table === 'contacts'){
    if(command === 'add'){
        Controller.Contact.create(param)
    }
}
