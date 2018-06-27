const fs = require('fs')
const Model = require('./Model/Model')
const db = require('./database')

function seedDataCsv(){
  let readdataAddressBooks = fs.readFileSync('./address_books.csv', 'utf8') // for read csv file use readFileSync
  let dataAddressBooks = readdataAddressBooks.split('\r\n')
  let containArr = []
  for (let i = 1; i < dataAddressBooks.length-1; i++) {
    containArr.push(dataAddressBooks[i].split(','))
  }
  let query = "INSERT INTO Contacts(name, phoneNumber, eMail, nameCompany) VALUES ";
  for(let j = 0; j < containArr.length; j++) {
    query += `("${containArr[j][0]}", "${containArr[j][1]}", "${containArr[j][2]}", "${containArr[j][3]}"), `
  }
  let modQuery = query.slice(0, [query.length-2])
  modQuery += ';'
  db.run(modQuery)
}

seedDataCsv()
