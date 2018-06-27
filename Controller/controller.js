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

    static menu(){
        var listMenu = modelContact.menu()
        View.show(listMenu)
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

    static deleteGroup(id){
        modelGroup.deleteGroup(id,function(data){
            View.show(`sisa data grup : ${data.length}`)
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

    static deleteContact(id){
        modelContact.deleteContact(id, function(data){
            // if(err) throw err
            View.show(`sisa data kontak : ${data.length}`)
        })
    }

    static showContact(){
        modelContact.showContact(function(data){
            View.show(data)
        })
    }

    static assignContactToGroup(idKontak, idGrup){
        modelContactGroup.assignContactToGroup(idKontak,idGrup,function(data){
            console.log(data);
            
        })
    }
}

module.exports = Controller