let Controller = require('./controller')

let argv = process.argv
let table = argv[2]
let id = argv[3]
let command = argv[3]
let nama = argv[4]
let perusahaan = argv[5]
let noTelfon = argv[6]
let email = argv[7]

if (table === 'contacts') {

    switch (command) {

        case 'create':
            nama = argv[4];
            perusahaan = argv[5];
            noTelfon = argv[6];
            email = argv[7];


            Controller.c_create(nama, perusahaan, noTelfon, email);
            break;

        case 'update':

            id = argv[4]
            nama = argv[5];
            perusahaan = argv[6];
            noTelfon = argv[7];
            email = argv[8];

            Controller.c_update(id, nama, perusahaan, noTelfon, email);
            break;

        case 'delete':
            id = argv[4]
            // nama = argv[5];
            // perusahaan = argv[6];
            // noTelfon = argv[7];
            // email = argv[8];
            Controller.c_delete(id);
            break;
        case 'show':
            Controller.c_showContact();
            break;

    }

} else if (table === 'groups') {


    switch (command) {

        case 'create':
            let namaGroup = argv[5];
            Controller.c_createGroup(namaGroup);
            break;

        case 'update':
            id = argv[4]
            nama = argv[5];
            Controller.c_update(id, nama);
            break;

        case 'update':
            id = argv[4]
            nama = argv[5];
            Controller.c_delete(id, nama);
            break;
        case 'showGroup':
            Controller.c_showContact();
            break;

    }

} else if (table === 'addContactToGroup') {

    nama = argv[3];
    Controller.c_addToGroup(nama);

} else if (table === 'deleteGroup') {


    Controller.c_deleteGroup();

}