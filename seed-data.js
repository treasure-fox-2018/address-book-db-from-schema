const fs = require('fs')
var db = require('./db')

    var dataKontak = fs.readFileSync('./kontak.csv','utf-8').split('\n')
    var query = `INSERT INTO kontak VALUES`
    for(var i = 1; i < dataKontak.length-1;i++){
        var splitdataKontak = dataKontak[i].split(',')
        if(i === dataKontak.length-2){
            query += `(null,"${splitdataKontak[0]}", "${splitdataKontak[1]}", "${splitdataKontak[2]}","${splitdataKontak[3]}");`
        }else{
            query += `(null,"${splitdataKontak[0]}", "${splitdataKontak[1]}", "${splitdataKontak[2]}","${splitdataKontak[3]}"), `
        }
    }

    var dataGrup = fs.readFileSync('./grup.csv','utf-8').split('\n')
    var query = `INSERT INTO grup VALUES`
    for(var i = 1; i < dataGrup.length-1;i++){
        var splitdataGrup = dataGrup[i].split(',')
        if(i === dataGrup.length-2){
            query += `(null,"${splitdataGrup[0]}");`
        }else{
            query += `(null,"${splitdataGrup[0]}"), `
        }
    }

    

db.run(query)
// var cobaKontak = fs.readFileSync('./cobakontak.csv','utf-8').split('\n')

// db.serialize(function(){
//     for(var i = 1; i < cobaKontak.length-1;i++){
//         var cobaKontakSplit = cobaKontak[i].split(',')
//         db.run(`INSERT INTO kontak VALUES (null,'${cobaKontakSplit[0]}','${cobaKontakSplit[1]}','${cobaKontakSplit[2]}','${cobaKontakSplit[3]}')`)
//     }
// })