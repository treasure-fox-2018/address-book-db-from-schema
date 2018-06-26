const modelContact = require('../Model/contact.js')
const modelGroup = require('../Model/group.js')
const modelContactGroup = require('../Model/contact-group')
const View = require('../View/view.js')

class Controller {
    static cek(){
        modelContact.cek()
        modelContactGroup.cek()
        modelGroup.cek()
        View.cek()
    }

    static addGroup(name){
        modelGroup.addGroup(name,function(data){
            View.show(`${data} berhasil ditambahkan`)
        })
    }

    static readGroup(){
        modelGroup.readGroup(function(data){
            View.show(data)
        })
    }

    static updateGroup(oldName, newName){
        modelGroup.updateGroup(oldName, newName, function(data){
            View.show(`${data} telah diubah`)
        })
    }

    static deleteGroup(nama){
        modelGroup.deleteGroup(nama,function(data){
            View.show(`${nama} telah dihapus`)
        })
    }

    static addContact(nama, nama_perusahaan, nomor_telp, email){
        modelContact.addContact(nama, nama_perusahaan, nomor_telp, email,function(nama, nama_perusahaan, nomor_telp, email){
            View.show(`${nama}, ${nama_perusahaan}, ${nomor_telp}, ${email} berhasil ditambahkan`)
        })
    }

    static readContact(){
        modelContact.readContact(function(data){
            View.show(data)
        })
    }

    static updateContact(nama,nama_perusahaan,nomor_telp, email){
        modelContact.updateContact(nama,nama_perusahaan,nomor_telp, email, function(data){
            View.show(`data ${data} telah diupdate`)
        })
    }

    static deleteContact(nama){
        modelContact.deleteContact(nama, function(data){
            // if(err) throw err
            View.show(`${data} telah dihapus`)
        })
    }

    static showContact(){
        modelContact.showContact(function(data){
            View.show(data)
        })
    }
}

module.exports = Controller