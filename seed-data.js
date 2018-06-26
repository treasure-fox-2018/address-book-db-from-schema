const db = require('./setup')
const fs = require('fs')

fs.readFile("dummyContacts.json", "utf-8", function(err, contacts){
    if(err) throw err
    let obj = JSON.parse(contacts)
    db.serialize(function(){
        for(let i=0; i<obj.length; i++){
            let query = `INSERT INTO Contacts (name, company, phone, email) VALUES 
            ('${obj[i].name}', '${obj[i].company}', '${obj[i].phone}', '${obj[i].email}')`
            db.run(query, function(err){
                if(err) throw err
                console.log(`Data ${i+1} has been input into database!`)
            })
        }
    })
})

