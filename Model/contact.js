const db = require('../db.js')

class Contact{
    static cek(){
        console.log('modelKontak');

    }

    static addContact(nama, nama_perusahaan, nomor_telp, email, callback){
        var query = `INSERT INTO kontak VALUES (null,"${nama}",'${nama_perusahaan}','${nomor_telp}','${email}')`

        db.run(query, (err, data) =>{
            if(err) throw err
            callback(nama, nama_perusahaan, nomor_telp, email)
        })
    }

    static readContact(callback){
        var query = `SELECT * FROM kontak`

        db.all(query, (err, data) => {
            if(err) throw err
            callback(data)
        })
    }

    static updateContact(name,nama_perusahaan,nomor_telp, email, callback){
        var query = `UPDATE kontak 
                    SET 
                        nama_perusahaan = '${nama_perusahaan}',
                        nomor_telp = '${nomor_telp}',
                        email = '${email}'
                    WHERE nama = '${name}'`
        
        db.run(query, function(err,data){
            if(err) throw err
            callback(name)
        })
    }

    static deleteContact(nama,callback){
        var query = `DELETE FROM kontak WHERE nama = '${nama}'`

        db.run(query,(err,data) => {
            if(err) throw err
            callback(nama)
        })
    }

    // static showContact(callback){
    //     var query = `SELECT * FROM kontak 
    //                 JOIN grup_kontak 
    //                 ON kontak.id = grup_kontak.kontak_id 
    //                 JOIN grup ON grup_kontak.grup_Id = grup.id`

    //     db.all(query, (err, data) => {
    //         if(err) throw err
    //         callback(data)
    //     })
    // }
}

module.exports = Contact