'use strict'

class View {
    static showMessage(message) {
        console.log(message)
    }

    static printHelp() {
        console.log('                                                   ADDRESS BOOK\n')
        console.log('                                                     Features:\n')
        console.log('node main help                                                                 ->  print all possible command features');
        console.log('node main initfiletodb:contacts                                                ->  seed contacts.json into table groups in db')
        console.log('node main initfiletodb:groups                                                  ->  seed groups.json into table groups in db')
        console.log('node main showAllGroupContacts                                                 ->  print all contacts with assigned groups');
        console.log('node main assign:contactall                                                    -> assign all randomized contact with random group')
        console.log('node main assign:contact <contact name> to <group name>                        ->  assign a specified contact into a group')
        console.log('node main add:contact <contact name> <phone number> <email> <company name>     ->  add new contact');
        console.log('node main add:group <group name>                                               ->  add new group');
        console.log('node main update:contact <field name>:<initial value> with:<new value>         ->  update contact with specified field')
        console.log('node main update:group <field name>:<initial value> with:<new value>           ->  update group with specified field')
    }
}

module.exports = View
