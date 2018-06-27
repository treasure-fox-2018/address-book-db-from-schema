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

    static deleteContact(id,callback){
        var queryKontak = `DELETE FROM kontak WHERE id = '${id}'`
        var queryGrupKontak = `DELETE FROM grup_kontak WHERE kontak_id = ${id}`
        var queryReadKontak = `SELECT * FROM kontak`
        
        db.serialize(() =>{
            db.run(queryKontak,(err) => {
                if(err) throw err    
            })

            db.run(queryGrupKontak,(err) => {
                if(err) throw err
            })

            db.all(queryReadKontak,(err,data) => {
                if(err) throw err
                callback(data)
            })
        })
    }

    static showContact(callback){
        var query = `SELECT newData.kontakNama, grup.nama AS nama_grup FROM grup_kontak, (SELECT kontak.nama AS kontakNama, grup_kontak.kontak_id AS newDataId
            FROM kontak 
            JOIN grup_kontak 
              ON kontak.id = grup_kontak.kontak_id 
            GROUP BY kontak.id order by kontakNama) as newData 
            JOIN grup 
             ON grup_kontak.grup_Id = grup.id 
            WHERE grup_kontak.kontak_id = newData.newDataId
            ORDER BY newData.kontakNama`

        db.all(query, (err, data) => {
            if(err) throw err
            callback(data)
        })
    }

    static menu(){
        var arrListMenu = [
            {'$ node main.js' : 'addGroup <nama grup>'}, //menambah nama grup
            {'$ node main.js' : 'updateGroup <nama> <nama baru>'},//mengubah nama grup
            {'$ node main.js' : 'deleteGroup <id grup>'},//mengahupus grup berdasar id
            {'$ node main.js' : 'readGroup <nama grup>'},
            {'$ node main.js' : 'addContact <nama kontak> <nama perusahaan> <phone number> <email>'},
            {'$ node main.js' : 'updateContact <nama kontak> <nama perusahaan baru> <phone number baru> <email baru>'},
            {'$ node main.js' : 'readContact'},
            {'$ node main.js' : 'deleteContact <id kontak>'},
            {'$ node main.js' : 'showContact'},//menampilkan nama kontak dan grupnya
        ]

        return arrListMenu
    }
}

module.exports = Contact