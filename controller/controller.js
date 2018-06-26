"use strict"
const modelContact = require('../model/contact.js')
const modelGroup = require('../model/group.js')
const modelContactGroup = require('../model/contact-group.js')
const View = require('../view/view.js')

class Contact{
    static create(name,company,phoneNumber,email){
        modelContact.create(name,company,phoneNumber,email,function(status){
            View.message(`New Contact: "${name}" has been made`)
        })
    }

    static read(){
        modelContact.read(function(contacts){
            View.message(contacts)
        })
    }

    static update(id,column,value){
        modelContact.update(id,column,value,function(status){
            View.message(`New Contact with id ="${id}" has been update`)
        })

    }

    static delete(id){
        modelContact.delete(id,function(status){
            View.message(`New Contact with id = "${id}" has been delete`)
        })

    }
}

class Group{
    static create(name){
        modelGroup.create(name,function(status){
            View.message(`New Group: "${name}" has been made`)
        })
    }

    static read(){
        modelGroup.read(function(groups){
            View.message(groups)
        })
    }

    static update(id,column,value){
        modelGroup.update(id,column,value,function(status){
            View.message(`New Group with id ="${id}" has been update`)
        })

    }

    static delete(id){
        modelGroup.delete(id,function(status){
            View.message(`New Contact with id = "${id}" has been delete`)
        })

    }
}

module.exports = {
    Contact,
    Group
}