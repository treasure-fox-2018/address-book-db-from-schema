let Table = require('cli-table');

class View {

  static printError(data) {
    console.log(`Error Message :`, data)
  }

  static printMessage(data) {
    console.log(data)
  }

  static printTable(data) {
    let table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
      });
    let header = Object.keys(data[0])
    table.push(header)
    for (let i = 0 ; i < data.length ; i++) {
      let rowData = []
      for (let index in data[i]) {
        if (data[i][index] == null) {
          data[i][index] =""
        }
        rowData.push(data[i][index])
      }
      table.push(rowData)
    }
    console.log(table.toString());
  }

}

module.exports = View