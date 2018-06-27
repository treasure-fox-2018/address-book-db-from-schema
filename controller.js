let Model = require('./model')
let View = require('./view')

class Controller {

    static c_create(nama, perusahaan, noTelfon, email) {

        Model.m_create(nama, perusahaan, noTelfon, email, function (message) {
            View.v_display(message)
        })

    }

    static c_update(id, nama, perusahaan, noTelfon, email) {

        Model.m_update(id, nama, perusahaan, noTelfon, email, function (message) {
            View.v_display(message)
        })

    }

    static c_delete(id) {

        Model.m_delete(id,function (message) {
            View.v_display(message)
        })

    }

    static c_showContact(){
        Model.m_showContact(function (message) {
            View.v_display(message)
        })

    }

    static c_createGroup(namaGroup){
        Model.m_createGroup(namaGroup,function (message) {
            View.v_display(message)
        })
    }






}

module.exports = Controller